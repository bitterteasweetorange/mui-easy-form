import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { CascaderIO, CascaderIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type CascaderFieldProps<T extends FieldValues, Shape> = FieldWrapper<
  CascaderIOProps<Shape>,
  T
>

export function CascaderField<T extends FieldValues, Shape>(
  props: CascaderFieldProps<T, Shape>,
) {
  const { rawIOProps } = useEasyFormField<CascaderIOProps<Shape>, T>(props)
  return <CascaderIO {...rawIOProps} />
}
