import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { DateIO, DateIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type DateFieldProps<T extends FieldValues> = FieldWrapper<DateIOProps, T>
export function DateField<T extends FieldValues>(props: DateFieldProps<T>) {
  const { rawIOProps } = useEasyFormField<DateIOProps, T>(props)

  return <DateIO {...rawIOProps} />
}
