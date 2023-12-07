import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { PasswordIO, PasswordIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type PasswordFieldProps<T extends FieldValues> = FieldWrapper<
  PasswordIOProps,
  T
>
export function PasswordField<T extends FieldValues>(
  props: PasswordFieldProps<T>,
) {
  const { rawIOProps } = useEasyFormField<PasswordIOProps, T>(props)
  return <PasswordIO {...rawIOProps} />
}
