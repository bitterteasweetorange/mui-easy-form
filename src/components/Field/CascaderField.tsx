import {
  EasyCascaderBaseNode,
  EasyCascaderInput,
  EasyCascaderInputProps,
} from 'mui-easy-cascader'
import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { useEasyFormField } from '../useEasyFormField'

export type CascaderFieldProps<
  T extends FieldValues,
  OptionT extends EasyCascaderBaseNode,
  IdAsValue extends boolean = false,
> = FieldWrapper<EasyCascaderInputProps<OptionT, IdAsValue>, T>

export function CascaderField<
  T extends FieldValues,
  OptionT extends EasyCascaderBaseNode,
  IdAsValue extends boolean = false,
>(props: CascaderFieldProps<T, OptionT, IdAsValue>) {
  const { rawIOProps } = useEasyFormField<
    EasyCascaderInputProps<OptionT, IdAsValue>,
    T
  >(props)
  return <EasyCascaderInput<OptionT, IdAsValue> {...(rawIOProps as any)} />
}
