import { useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { EasyFormContext } from '../EasyFormContext'
import { DateTimeIO, DateTimeIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type DateTimeFieldProps<T extends FieldValues> = FieldWrapper<
  DateTimeIOProps,
  T
>
export function DateTimeField<T extends FieldValues>(
  props: DateTimeFieldProps<T>,
) {
  const easyFormTheme = useContext(EasyFormContext)

  const { rawIOProps } = useEasyFormField<DateTimeIOProps, T>(props)
  return <DateTimeIO {...easyFormTheme.Text} {...rawIOProps} />
}
