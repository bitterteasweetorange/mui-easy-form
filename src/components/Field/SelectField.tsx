import { useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { EasyFormContext } from '../EasyFormContext'
import { SelectIO, SelectIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type SelectFieldProps<T extends FieldValues, OptionT> = FieldWrapper<
  SelectIOProps<OptionT>,
  T
>

export function SelectField<T extends FieldValues, OptionT>(
  props: SelectFieldProps<T, OptionT>,
) {
  const easyFormTheme = useContext(EasyFormContext)

  const { rawIOProps } = useEasyFormField<SelectIOProps<OptionT>, T>(props)

  return (
    <SelectIO<OptionT>
      {...rawIOProps}
      {...easyFormTheme.Text}
      disableClearable={props.disableClearable}
      ioRef={rawIOProps.ref}
      ref={undefined}
    />
  )
}
