import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { NumberIO, NumberIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type NumberFieldProps<T extends FieldValues> = FieldWrapper<
  NumberIOProps,
  T
>
export function NumberField<T extends FieldValues>(props: NumberFieldProps<T>) {
  const { rawIOProps } = useEasyFormField<NumberIOProps, T>(props)
  return <NumberIO {...rawIOProps} />
}
