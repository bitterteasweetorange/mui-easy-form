import { ForwardedRef } from 'react'
import { CommonFormControlProps } from './types'

/**
 * extract form control props from props
 */
export function useFormControlWrapperProps<
  T extends CommonFormControlProps & { ioRef?: ForwardedRef<HTMLDivElement> },
>(
  props: T,
): {
  restProps: Omit<
    T,
    'label' | 'helperText' | 'error' | 'disabled' | 'required' | 'ioRef'
  >
  formControlWrapperProps: CommonFormControlProps & {
    ref?: ForwardedRef<HTMLDivElement>
  }
} {
  const { label, helperText, disabled, required, error, ioRef, ...restProps } =
    props
  return {
    formControlWrapperProps: {
      label,
      helperText,
      disabled,
      required,
      error,
      ref: ioRef,
    },
    restProps,
  }
}
