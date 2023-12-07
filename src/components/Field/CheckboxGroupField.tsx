import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { CheckboxGroupIO, CheckboxGroupIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type CheckboxGroupFieldProps<
  T extends FieldValues,
  OptionT,
> = FieldWrapper<CheckboxGroupIOProps<OptionT>, T>

export function CheckboxGroupField<T extends FieldValues, OptionT>(
  props: CheckboxGroupFieldProps<T, OptionT>,
) {
  const { rawIOProps } = useEasyFormField<CheckboxGroupIOProps<OptionT>, T>(
    props,
  )

  return (
    <CheckboxGroupIO<OptionT>
      {...rawIOProps}
      ioRef={rawIOProps.ref}
      ref={undefined}
    />
  )
}
