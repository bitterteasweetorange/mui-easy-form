import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { TimeIO, TimeIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type TimeFieldProps<T extends FieldValues> = FieldWrapper<TimeIOProps, T>
export function TimeField<T extends FieldValues>(props: TimeFieldProps<T>) {
  const { rawIOProps } = useEasyFormField<TimeIOProps, T>(props)
  return <TimeIO {...rawIOProps} />
}
