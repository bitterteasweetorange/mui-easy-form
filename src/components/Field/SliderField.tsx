import { useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { EasyFormContext } from '../EasyFormContext'
import { SliderIO, SliderIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type SliderFieldProps<T extends FieldValues> = FieldWrapper<
  SliderIOProps,
  T
>

export function SliderField<T extends FieldValues>(props: SliderFieldProps<T>) {
  const easyFormTheme = useContext(EasyFormContext)

  const { rawIOProps } = useEasyFormField<SliderIOProps, T>(props)
  return <SliderIO {...rawIOProps} {...easyFormTheme.Text} />
}
