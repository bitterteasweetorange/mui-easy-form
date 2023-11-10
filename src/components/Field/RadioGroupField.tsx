import { useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { RadioGroupIO, RadioGroupIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type RadioGroupFieldProps<T extends FieldValues, OptionT> = FieldWrapper<
  RadioGroupIOProps<OptionT>,
  T
>

export function RadioGroupField<T extends FieldValues, OptionT>(
  props: RadioGroupFieldProps<T, OptionT>,
) {
  const { rawIOProps } = useEasyFormField<RadioGroupIOProps<OptionT>, T>(props)

  return (
    <RadioGroupIO<OptionT>
      {...rawIOProps}
      ioRef={rawIOProps.ref}
      ref={undefined}
    />
  )
}
