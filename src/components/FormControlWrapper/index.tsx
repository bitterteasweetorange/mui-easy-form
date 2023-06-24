import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputLabel,
} from '@mui/material'
import { ForwardedRef, ReactNode, forwardRef } from 'react'
import { CommonFormControlProps } from '../../helpers/types'

/**
 * 1. label and helperText
 * 2. error, required, disabled
 * 3. pass ref to FormControl
 */
export const FormControlWrapper = forwardRef(Base)

function Base(
  {
    children,
    label,
    error,
    helperText,
    required,
    disabled,
    inputLabel,
  }: CommonFormControlProps & {
    children: ReactNode
    inputLabel?: boolean
  },
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <FormControl
      ref={ref}
      error={error}
      required={required}
      disabled={disabled}
    >
      {label && inputLabel ? (
        <InputLabel>{label}</InputLabel>
      ) : (
        <FormLabel>{label}</FormLabel>
      )}
      {children}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
