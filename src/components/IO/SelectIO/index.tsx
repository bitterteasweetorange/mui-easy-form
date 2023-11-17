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

type Base<OptionT, Multiple extends boolean = false, Value = OptionT> = Omit<
  AutocompleteProps<OptionT, Multiple, undefined, undefined>,
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
  isOptionEqual?: (optionValue: OptionT, value: DeepPartial<Value>) => boolean
  checkbox?: boolean
  search?: boolean
  /**
   *  Example:
   *  options: [{ id: 1, name: 'name1', age: 18 }]
   *
   *  approch1:
   *  - value: { id: 1, name: 'name1', age: 18 }
   *  - isOptionEqual={(option, value) => option.id === value.id}
   *
   *  approch2:
   *  - value: 1
   *  - getOption2Value={(option) => option.id}
   *
   *  choose different approch according to your data structure
   **/
  getOption2Value?: (option: OptionT) => Value
} & Pick<OptionsProps<OptionT>, 'renderOption'>

type Single<
  OptionT,
  Multiple extends boolean,
  Value = OptionT,
> = ControlledProps<Value> &
  Base<OptionT, Multiple, Value> & {
    multiple?: false
  }

type Multi<
  OptionT,
  Multiple extends boolean,
  Value = OptionT,
> = ControlledProps<Value[]> &
  Base<OptionT, Multiple, Value> & {
    multiple: true
  }

export type SelectIOProps<
  OptionT,
  Multiple extends boolean = false,
  Value = OptionT,
> = Multiple extends true
  ? Multi<OptionT, Multiple, Value>
  : Single<OptionT, Multiple, Value>

export function SelectIO<
  OptionT,
  Multiple extends boolean = false,
  Value = OptionT,
>(props: SelectIOProps<OptionT, Multiple, Value>) {
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
    <Autocomplete<OptionT, Multiple>
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
            ? (newValue as unknown as OptionT[])?.map((x) => getOption2Value(x))
            : getOption2Value(newValue as unknown as OptionT)
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
          : (option: OptionT) =>
              typeof option === 'number'
                ? option.toString()
                : typeof option === 'object'
                ? (option as any)?.label
                : option
      }
      renderOption={
        checkbox || renderOption
          ? (props, option, state) => (
              <Box
                component="li"
                {...props}
              >
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
