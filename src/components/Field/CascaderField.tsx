import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { CascaderIO, CascaderIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'
import { EasyCascaderBaseNode } from 'mui-easy-cascader'

export type CascaderFieldProps<
  T extends FieldValues,
  Shape extends EasyCascaderBaseNode,
> = FieldWrapper<CascaderIOProps<Shape>, T>

export function CascaderField<
  T extends FieldValues,
  Shape extends EasyCascaderBaseNode,
>(props: CascaderFieldProps<T, Shape>) {
  const { rawIOProps } = useEasyFormField<CascaderIOProps<Shape>, T>(props)
  return <CascaderIO {...rawIOProps} />
}
