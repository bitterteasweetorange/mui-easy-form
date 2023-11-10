import { useContext } from 'react'
import { FieldValues } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { WordIO, WordIOProps } from '../IO'
import { useEasyFormField } from '../useEasyFormField'

export type WordFieldProps<T extends FieldValues> = FieldWrapper<WordIOProps, T>

export function WordField<T extends FieldValues>(props: WordFieldProps<T>) {
  const { rawIOProps } = useEasyFormField<WordIOProps, T>(props)
  return <WordIO {...rawIOProps} />
}
