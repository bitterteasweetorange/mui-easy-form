import { useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { EasyFormContext } from '../EasyFormContext'
import { PasswordIO, PasswordIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type PasswordFieldProps<T extends FieldValues> = FieldWrapper<
  PasswordIOProps,
  T
>
export function PasswordField<T extends FieldValues>(
  props: PasswordFieldProps<T>,
) {
  const easyFormTheme = useContext(EasyFormContext)

  const { rawIOProps } = useEasyFormField<PasswordIOProps, T>(props)
  return <PasswordIO {...easyFormTheme.Text} {...rawIOProps} />
}
