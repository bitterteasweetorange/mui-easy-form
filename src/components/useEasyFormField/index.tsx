import { ReactNode, useContext } from 'react'
import { ErrorOption, FieldValues, get, useController } from 'react-hook-form'
import { FieldWrapper } from '../../helpers/types'
import { EasyFormContext } from '../EasyFormContext'

export function useEasyFormField<
  RawIOProps extends {
    helperText?: ReactNode
  },
  T extends FieldValues,
>(
  props: FieldWrapper<RawIOProps, T>,
): {
  rawIOProps: RawIOProps
} {
  const easyFormTheme = useContext(EasyFormContext)

  const { control, name, rules, defaultValue, ...rawIOProps } = props
  const { required, helperText } = rawIOProps

  // make sure defaultValue is not undefined to avoid reset not working
  const defaultValueNext = defaultValue === undefined ? null : defaultValue

  const controller = useController({
    name,
    defaultValue: defaultValueNext,
    rules: {
      ...rules,
      required: rules?.required || {
        message: easyFormTheme.errorMessage?.required,
        value: !!required,
      },
    },
    control,
  })
  const { formState } = controller
  const fieldError = get(formState.errors, name) as ErrorOption
  return {
    rawIOProps: {
      ...(rawIOProps as unknown as RawIOProps),
      ...controller.field,
      error: !!fieldError,
      helperText: fieldError?.message || helperText,
    },
  }
}
