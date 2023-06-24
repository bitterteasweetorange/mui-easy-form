import { useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { EasyFormContext } from '../EasyFormContext'
import { TimeIO, TimeIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type TimeFieldProps<T extends FieldValues> = FieldWrapper<TimeIOProps, T>
export function TimeField<T extends FieldValues>(props: TimeFieldProps<T>) {
  const easyFormTheme = useContext(EasyFormContext)

  const { rawIOProps } = useEasyFormField<TimeIOProps, T>(props)
  return <TimeIO {...easyFormTheme.Text} {...rawIOProps} />
}
