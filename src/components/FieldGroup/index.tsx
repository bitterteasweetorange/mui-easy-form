import { Box, SxProps } from '@mui/material'
import { merge } from 'lodash-es'
import { useContext } from 'react'
import { FieldValues, Path, UseFormReturn, UseFormWatch } from 'react-hook-form'
import { EasyFormContext } from '../EasyFormContext'
import {
  DateField,
  DateFieldProps,
  DateTimeField,
  DateTimeFieldProps,
  TimeField,
  TimeFieldProps,
} from '../Field'
import { CascaderField, CascaderFieldProps } from '../Field/CascaderField'
import { CheckboxField, CheckboxFieldProps } from '../Field/CheckboxField'
import {
  CheckboxGroupField,
  CheckboxGroupFieldProps,
} from '../Field/CheckboxGroupField'
import { NumberField, NumberFieldProps } from '../Field/NumberField'
import { PasswordField, PasswordFieldProps } from '../Field/PasswordField'
import { RadioGroupField, RadioGroupFieldProps } from '../Field/RadioGroupField'
import { SelectField, SelectFieldProps } from '../Field/SelectField'
import { SliderField, SliderFieldProps } from '../Field/SliderField'
import { SwitchField, SwitchFieldProps } from '../Field/SwitchField'
import { WordField, WordFieldProps } from '../Field/WordField'

export type FieldGroupProps<T extends FieldValues> = {
  fields: FieldItemProps<T>[]
  /**
   * control object provided by invoking useForm, optional when using FormProvider
   */
  control?: UseFormReturn<T>['control']
  /**
   * override the "sx" provided by QuickFormProvider
   */
  sx?: SxProps
}

export function FieldGroup<T extends FieldValues>({
  fields,
  control,
  sx,
}: FieldGroupProps<T>) {
  const easyFormContext = useContext(EasyFormContext)
  const finalSx = merge(sx, easyFormContext.FieldGroup?.sx)
  return (
    <Box display="grid" gap={2} sx={finalSx}>
      {fields.map((field, index) => (
        // use FieldGroup's control
        <FieldItem<T>
          control={control}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(field as any)}
          key={field.name + index}
        />
      ))}
    </Box>
  )
}

export type FieldItemProps<T extends FieldValues> =
  | TextItem<T>
  | NumberItem<T>
  | SwitchItem<T>
  | CheckboxItem<T>
  | RadioGroupItem<T>
  | CheckboxGroupItem<T>
  | SelectItem<T>
  | DateItem<T>
  | TimeItem<T>
  | DateTimeItem<T>
  | PasswordItem<T>
  | SliderItem<T>
  | CascaderItem<T>

type BaseFieldProps<T extends FieldValues> = {
  condition?: {
    /**
     * watch function provided by useForm
     */
    watch: UseFormWatch<T>
    /**
     * field name to watch
     */
    fieldName: Path<T>
    /**
     * display the field when the condition is true
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    is: (fieldValue: any) => boolean
  }
}

type TextItem<T extends FieldValues> = {
  componentType: 'TEXT'
} & WordFieldProps<T> &
  BaseFieldProps<T>

type NumberItem<T extends FieldValues> = {
  componentType: 'NUMBER'
} & NumberFieldProps<T> &
  BaseFieldProps<T>

type SwitchItem<T extends FieldValues> = {
  componentType: 'SWITCH'
} & SwitchFieldProps<T> &
  BaseFieldProps<T>

type CheckboxItem<T extends FieldValues> = {
  componentType: 'CHECKBOX'
} & CheckboxFieldProps<T> &
  BaseFieldProps<T>

type RadioGroupItem<T extends FieldValues> = {
  componentType: 'RADIO-GROUP'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & RadioGroupFieldProps<T, any> &
  BaseFieldProps<T>

type CheckboxGroupItem<T extends FieldValues> = {
  componentType: 'CHECKBOX-GROUP'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & CheckboxGroupFieldProps<T, any> &
  BaseFieldProps<T>

type SelectItem<T extends FieldValues> = {
  componentType: 'SELECT'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & SelectFieldProps<T, any> &
  BaseFieldProps<T>

type X<T extends FieldValues> = {
  name: Path<T>
  control?: UseFormReturn['control']
}
type DateItem<T extends FieldValues> = {
  componentType: 'DATE'
} & DateFieldProps<T> &
  BaseFieldProps<T> &
  X<T>

type TimeItem<T extends FieldValues> = {
  componentType: 'TIME'
} & TimeFieldProps<T> &
  BaseFieldProps<T> &
  X<T>

type DateTimeItem<T extends FieldValues> = {
  componentType: 'DATETIME'
} & DateTimeFieldProps<T> &
  BaseFieldProps<T> &
  X<T>

type PasswordItem<T extends FieldValues> = {
  componentType: 'PASSWORD'
} & PasswordFieldProps<T> &
  BaseFieldProps<T>

type SliderItem<T extends FieldValues> = {
  componentType: 'SLIDER'
} & SliderFieldProps<T> &
  BaseFieldProps<T>

type CascaderItem<T extends FieldValues> = {
  componentType: 'CASCADER'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & CascaderFieldProps<T, any> &
  BaseFieldProps<T>

function FieldItem<T extends FieldValues>(props: FieldItemProps<T>) {
  // condition
  if (props.condition) {
    const { is, watch, fieldName } = props.condition
    const conditionValue = watch(fieldName)
    if (is(conditionValue)) {
      return null
    }
  }
  const { componentType, ...fieldProps } = props
  switch (componentType) {
    case 'TEXT':
      return <WordField {...(fieldProps as WordFieldProps<T>)} />
    case 'NUMBER':
      return <NumberField {...(fieldProps as NumberFieldProps<T>)} />
    case 'SWITCH':
      return <SwitchField {...(fieldProps as SwitchFieldProps<T>)} />
    case 'CHECKBOX':
      return <CheckboxField {...(fieldProps as CheckboxFieldProps<T>)} />
    case 'RADIO-GROUP':
      return (
        <RadioGroupField
          {...(fieldProps as RadioGroupFieldProps<T, unknown>)}
        />
      )
    case 'CHECKBOX-GROUP':
      return (
        <CheckboxGroupField
          {...(fieldProps as CheckboxGroupFieldProps<T, unknown>)}
        />
      )
    case 'SELECT':
      return <SelectField {...(fieldProps as SelectFieldProps<T, unknown>)} />
    case 'DATE':
      return <DateField {...(fieldProps as DateFieldProps<T>)} />
    case 'TIME':
      return <TimeField {...(fieldProps as TimeFieldProps<T>)} />
    case 'DATETIME':
      return <DateTimeField {...(fieldProps as DateTimeFieldProps<T>)} />
    case 'PASSWORD':
      return <PasswordField {...(fieldProps as PasswordFieldProps<T>)} />
    case 'SLIDER':
      return <SliderField {...(fieldProps as SliderFieldProps<T>)} />
    case 'CASCADER':
      return (
        <CascaderField {...(fieldProps as CascaderFieldProps<T, unknown>)} />
      )
    default:
      // eslint-disable-next-line
      console.error('componentType not supported yet', componentType)
      return null
  }
}
