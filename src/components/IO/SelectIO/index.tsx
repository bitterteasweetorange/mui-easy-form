import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import {
  Autocomplete,
  AutocompleteProps,
  Box,
  Checkbox,
  Chip,
  TextField,
} from '@mui/material'
import { isEqual } from 'lodash-es'
import { useMemo } from 'react'
import { DeepPartial } from 'react-hook-form'
import { ControlledProps, OptionsProps } from '../../../helpers/types'

type Base<
  OptionItem,
  Multiple extends boolean = false,
  Value = OptionItem,
> = Omit<
  AutocompleteProps<OptionItem, Multiple, undefined, undefined>,
  | 'value'
  | 'onChange'
  | 'multiple'
  | 'renderOption'
  | 'defaultValue'
  | 'renderInput'
> & {
  // TODO: remove
  ioRef?: any
  /**
   * used to compare option and value, typeof value === typeof option
   *
   * Example:
   * value: { id: 1 }
   * option: { id: 1, name: 'a', age: 18 }
   */
  isOptionEqual?: (
    optionValue: OptionItem,
    value: DeepPartial<Value>,
  ) => boolean
  checkbox?: boolean
  search?: boolean
  /**
   * If typeof value !== typeof option, you should provide this function,
   *
   * Example:
   * value: 1
   * option: { id: 1, name: 'a', age: 18 }
   */
  getOption2Value?: (option: OptionItem) => Value
} & Pick<OptionsProps<OptionItem>, 'renderOption'>

type Single<
  OptionItem,
  Multiple extends boolean,
  Value = OptionItem,
> = ControlledProps<Value> &
  Base<OptionItem, Multiple, Value> & {
    multiple?: false
  }

type Multi<
  OptionItem,
  Multiple extends boolean,
  Value = OptionItem,
> = ControlledProps<Value[]> &
  Base<OptionItem, Multiple, Value> & {
    multiple: true
  }

export type SelectIOProps<
  OptionItem,
  Multiple extends boolean = false,
  Value = OptionItem,
> = Multi<OptionItem, Multiple, Value> | Single<OptionItem, Multiple, Value>

export function SelectIO<
  OptionItem,
  Multiple extends boolean = false,
  Value = OptionItem,
>(props: SelectIOProps<OptionItem, Multiple, Value>) {
  const {
    // form control
    label,
    helperText,
    required,
    error,
    // controlled props
    value,
    onChange,
    // addition
    multiple,
    isOptionEqual,
    ioRef,
    // Autocomplete props
    options,
    renderOption,
    getOptionLabel,
    checkbox,
    search,
    getOption2Value,
    ...rawProps
  } = props

  const selected = useMemo(() => {
    return options.filter((option) => {
      if (multiple) {
        if (getOption2Value) {
          return (value as Value[])?.some((v) =>
            isEqual(getOption2Value(option), v),
          )
        } else {
          return (value as Value[])?.some(
            (v) => isOptionEqual?.(option, v as any) ?? isEqual(option, v),
          )
        }
      }
      if (getOption2Value) {
        return isEqual(getOption2Value(option), value)
      } else {
        return isOptionEqual?.(option, value as any) ?? isEqual(option, value)
      }
    })
  }, [options, value, isOptionEqual])

  return (
    <Autocomplete<OptionItem, Multiple>
      {...rawProps}
      ref={ioRef}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          helperText={helperText}
          required={required}
          error={error}
          inputProps={{
            ...params.inputProps,
            readOnly: !search,
            style: {
              cursor: search ? undefined : 'pointer',
            },
          }}
        />
      )}
      multiple={multiple as any}
      disableCloseOnSelect={multiple}
      value={multiple ? selected : (selected?.[0] as any) ?? null}
      onChange={(_, newValue) => {
        if (getOption2Value) {
          const res = multiple
            ? (newValue as unknown as OptionItem[])?.map((x) =>
                getOption2Value(x),
              )
            : getOption2Value(newValue as unknown as OptionItem)
          onChange(res as any)
        } else {
          onChange(newValue as any)
        }
      }}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={
              typeof option === 'object' || typeof option === 'function'
                ? (option as any)?.label
                : option
            }
            {...getTagProps({ index })}
            key={index}
            disabled={rawProps?.disabled}
          />
        ))
      }
      getOptionLabel={
        getOptionLabel
          ? getOptionLabel
          : (option: OptionItem) =>
              typeof option === 'number'
                ? option.toString()
                : typeof option === 'object'
                ? (option as any)?.label
                : option
      }
      renderOption={
        checkbox || renderOption
          ? (props, option, state) => (
              <Box component="li" {...props}>
                {checkbox && (
                  <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    style={{ marginRight: 8 }}
                    checked={state.selected}
                  />
                )}
                {renderOption?.(option) ?? (option as any)?.label ?? option}
              </Box>
            )
          : undefined
      }
    />
  )
}
