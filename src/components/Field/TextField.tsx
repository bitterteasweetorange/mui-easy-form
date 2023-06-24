import { useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { EasyFormContext } from '../EasyFormContext'
import { TextIO, TextIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type TextFieldProps<T extends FieldValues> = FieldWrapper<TextIOProps, T>

export function TextField<T extends FieldValues>(props: TextFieldProps<T>) {
  const easyFormTheme = useContext(EasyFormContext)

  const { rawIOProps } = useEasyFormField<TextIOProps, T>(props)
  return <TextIO {...rawIOProps} {...easyFormTheme.Text} />
}
