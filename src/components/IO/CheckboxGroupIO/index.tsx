import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
  FormGroup,
} from '@mui/material'
import { get, isEqual } from 'lodash-es'
import { useMemo } from 'react'
import { ControlledProps, OptionsProps } from '../../../helpers/types'
import { useFormControlWrapperProps } from '../../../helpers/useFormControlWrapperProps'
import { FormControlWrapper } from '../../FormControlWrapper'

export type CheckboxGroupIOProps<T> = ControlledProps<T[]> &
  Omit<CheckboxProps, 'value' | 'onChange'> &
  OptionsProps<T> & {
    /**
     * determine the color for a given option
     */
    getOptionColor?: (value: T) => CheckboxProps['color']
    // TODO: remove
    ioRef?: any
    FormControlLabelProps?: FormControlLabelProps
    row?: boolean
  }

export function CheckboxGroupIO<T>(props: CheckboxGroupIOProps<T>) {
  const { formControlWrapperProps, restProps } =
    useFormControlWrapperProps<CheckboxGroupIOProps<T>>(props)

  const {
    // controlled props
    value,
    onChange,
    // options
    options,
    isOptionEqual,
    renderOption,
    getOptionDisabled,
    // addition
    getOptionColor,
    FormControlLabelProps,
    row,
    // radio props
    ...rawProps
  } = restProps

  const selectIndex: number[] = useMemo(() => {
    if (!value || value.length === 0) return []
    return [...value].map((item) => {
      return options.findIndex((option) => {
        return isOptionEqual?.(option, item) ?? isEqual(option, item)
      })
    })
  }, [options, value, isOptionEqual])

  return (
    <FormControlWrapper {...formControlWrapperProps}>
      <FormGroup row={row}>
        {options.map((option, index) => (
          <FormControlLabel
            {...FormControlLabelProps}
            key={index}
            control={
              <Checkbox
                {...rawProps}
                color={getOptionColor?.(option)}
                checked={selectIndex.includes(index)}
                onChange={(e) => {
                  const checked = e.target.checked
                  if (checked) {
                    onChange([...(value || []), option])
                  } else {
                    const nextValue = selectIndex
                      .filter((nextIndex) => nextIndex !== index)
                      .map((nextIndex) => options[nextIndex])
                    onChange(nextValue.length === 0 ? null : nextValue)
                  }
                }}
              />
            }
            label={
              typeof option === 'object'
                ? renderOption
                  ? renderOption(option)
                  : (get(option, 'label') as unknown as string)
                : (option as unknown as string)
            }
            disabled={getOptionDisabled?.(option)}
          />
        ))}
      </FormGroup>
    </FormControlWrapper>
  )
}
