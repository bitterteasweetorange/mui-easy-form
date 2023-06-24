import { Slider, SliderProps } from '@mui/material'
import { ForwardedRef, forwardRef } from 'react'
import { ControlledProps } from '../../../helpers/types'
import { useFormControlWrapperProps } from '../../../helpers/useFormControlWrapperProps'
import { FormControlWrapper } from '../../FormControlWrapper'

export type SliderIOProps = ControlledProps<number> &
  Omit<SliderProps, 'value' | 'onChange'>

export const SliderIO = forwardRef(Base)
function Base(props: SliderIOProps, ref: ForwardedRef<HTMLSpanElement>) {
  const { formControlWrapperProps, restProps } =
    useFormControlWrapperProps<SliderIOProps>(props)

  const {
    // controlled props
    value,
    onChange,
    // SliderProps props
    ...rawProps
  } = restProps

  return (
    <FormControlWrapper {...formControlWrapperProps}>
      <Slider
        ref={ref}
        {...rawProps}
        value={value || 0}
        onChange={(_, newValue) => {
          onChange(newValue as number)
        }}
      />
    </FormControlWrapper>
  )
}
