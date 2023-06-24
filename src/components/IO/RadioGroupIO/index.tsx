import { FormControlLabel, Radio, RadioGroup, RadioProps } from '@mui/material'
import { get, isEqual } from 'lodash-es'
import { ControlledProps, OptionsProps } from '../../../helpers/types'
import { useFormControlWrapperProps } from '../../../helpers/useFormControlWrapperProps'
import { FormControlWrapper } from '../../FormControlWrapper'

export type RadioGroupIOProps<T> = ControlledProps<T> &
  Omit<RadioProps, 'value' | 'onChange'> &
  OptionsProps<T> & {
    /**
     * determine the color for a given option
     */
    getOptionColor?: (value: T) => RadioProps['color']
    // TODO: remove
    ioRef?: any
    /**
     * display the options in a row
     */
    row?: boolean
  }

export function RadioGroupIO<T>(props: RadioGroupIOProps<T>) {
  const { formControlWrapperProps, restProps } =
    useFormControlWrapperProps<RadioGroupIOProps<T>>(props)

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
    row,
    // radio props
    ...rawProps
  } = restProps

  return (
    <FormControlWrapper {...formControlWrapperProps}>
      <RadioGroup
        value={
          // use index as radio group value
          value
            ? options.findIndex((option) => {
                return isOptionEqual?.(option, value) ?? isEqual(option, value)
              })
            : null
        }
        onChange={(event) => {
          const nextKey = (event.target as HTMLInputElement).value
          const nextValue = options[Number(nextKey)]
          onChange(nextValue ?? null)
        }}
        row={row}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={String(index)}
            value={String(index)}
            control={<Radio {...rawProps} color={getOptionColor?.(option)} />}
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
      </RadioGroup>
    </FormControlWrapper>
  )
}
