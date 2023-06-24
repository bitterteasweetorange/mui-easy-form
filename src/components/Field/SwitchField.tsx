import { useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { EasyFormContext } from '../EasyFormContext'
import { SwitchIO, SwitchIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type SwitchFieldProps<T extends FieldValues> = FieldWrapper<
  SwitchIOProps,
  T
>

export function SwitchField<T extends FieldValues>(props: SwitchFieldProps<T>) {
  const easyFormTheme = useContext(EasyFormContext)

  const { rawIOProps } = useEasyFormField<SwitchIOProps, T>(props)
  return <SwitchIO {...rawIOProps} {...easyFormTheme.Text} />
}
