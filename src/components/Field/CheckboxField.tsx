import { useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { CheckboxIO, CheckboxIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type CheckboxFieldProps<T extends FieldValues> = FieldWrapper<
  CheckboxIOProps,
  T
>

export function CheckboxField<T extends FieldValues>(
  props: CheckboxFieldProps<T>,
) {
  const { rawIOProps } = useEasyFormField<CheckboxIOProps, T>(props)
  return <CheckboxIO {...rawIOProps} />
}
