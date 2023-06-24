import { ReactNode } from 'react'
import {
  FieldValues,
  Path,
  UseControllerProps,
  UseFormReturn,
} from 'react-hook-form'

/**
 * wrapper for IOs
 * 1. add value and onChange
 * 2. add common FormControlProps
 */
export type ControlledProps<Value> = {
  /**
   * null is empty value
   */
  value: Value | null
  onChange: (nextValue: Value | null) => void
} & CommonFormControlProps

export type OptionsProps<T> = {
  /**
   * array of options
   * 1. key: unique key
   * 2. label: it's used to fill the list box options (and the input), if renderOption is not provided
   * 3. value
   */
  options: T[]
  /**
   * example:
   * options:[{key:1, label:'a', value:{id:1, name:'a'}}, {key:2, label:'b', value:{id:2, name:'b'}}]
   * value: {id:1}
   *
   * if you set isOptionEqual as (option, value) => a.id === b.id, then the option with key 1 will be selected
   */
  isOptionEqual?: (optionValue: T, value: any) => boolean
  /**
   * render the option
   */
  renderOption?: (value: T) => ReactNode
  /**
   * determine the disabled state for a given option
   */
  getOptionDisabled?: (value: T) => boolean
}

/**
 * wrapper for EasyFormFieldProps
 * 1. remove "value" and "onChange" from IO props
 * 2. add form field props
 */
export type FieldWrapper<
  RawIOProps extends {
    helperText?: ReactNode
  },
  T extends FieldValues,
> = Omit<RawIOProps, 'value' | 'onChange'> & {
  required?: boolean
  control?: UseFormReturn<T>['control']
  name: Path<T>
  rules?: UseControllerProps['rules']
  defaultValue?: any
}

export type CommonFormControlProps = {
  label?: ReactNode
  helperText?: ReactNode
  error?: boolean
  required?: boolean
  disabled?: boolean
}
