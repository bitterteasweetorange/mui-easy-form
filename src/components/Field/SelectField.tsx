import { useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { SelectIO, SelectIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type SelectFieldProps<
  T extends FieldValues,
  OptionT,
  Multiple extends boolean = false,
  ValueT = OptionT,
> = FieldWrapper<SelectIOProps<OptionT, Multiple, ValueT>, T>

export function SelectField<
  T extends FieldValues,
  OptionT,
  Multiple extends boolean = false,
  ValueT = OptionT,
>(props: SelectFieldProps<T, OptionT, Multiple, ValueT>) {
  const { rawIOProps } = useEasyFormField<
    SelectIOProps<OptionT, Multiple, ValueT>,
    T
  >(props)

  return (
    <SelectIO<OptionT, Multiple, ValueT>
      {...rawIOProps}
      disableClearable={props.disableClearable}
      ioRef={rawIOProps.ref}
      ref={undefined}
    />
  )
}
