import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material'
import { ForwardedRef, forwardRef } from 'react'
import { ControlledProps } from '../../../helpers/types'

export type CheckboxIOProps = ControlledProps<boolean> &
  Omit<CheckboxProps, 'value' | 'onChange'>

export const CheckboxIO = forwardRef(Base)
function Base(props: CheckboxIOProps, ref: ForwardedRef<HTMLButtonElement>) {
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
          <Checkbox
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
