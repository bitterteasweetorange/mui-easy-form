import {
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Switch,
  SwitchProps,
} from '@mui/material'
import { ForwardedRef, forwardRef } from 'react'
import { ControlledProps } from '../../../helpers/types'

export type SwitchIOProps = ControlledProps<boolean> &
  Omit<SwitchProps, 'value' | 'onChange'>

export const SwitchIO = forwardRef(Base)
function Base(props: SwitchIOProps, ref: ForwardedRef<HTMLButtonElement>) {
  const {
    // controlled props
    value,
    onChange,
    // commonFormControlProps
    label,
    helperText,
    disabled,
    error,
    // switch props
    ...rawProps
  } = props

  return (
    <FormGroup ref={ref}>
      <FormControlLabel
        control={
          <Switch
            {...rawProps}
            checked={!!value}
            onChange={(e) => {
              const nextValue = e.target.checked
              onChange(nextValue)
            }}
          />
        }
        label={label}
        disabled={disabled}
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormGroup>
  )
}
