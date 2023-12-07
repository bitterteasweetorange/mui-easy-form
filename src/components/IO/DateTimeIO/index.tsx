import { DateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers'
import { ForwardedRef, forwardRef } from 'react'
import { ControlledProps } from '../../../helpers/types'

export type DateTimeIOProps = ControlledProps<number> &
  Omit<DateTimePickerProps<number>, 'value' | 'onChange'>

export const DateTimeIO = forwardRef(Base)
function Base(props: DateTimeIOProps, ref: ForwardedRef<HTMLDivElement>) {
  const { label, required, helperText, error, disabled, ...datePickerProps } =
    props

  return (
    <DateTimePicker
      {...datePickerProps}
      slotProps={{
        textField: {
          disabled,
          error,
          helperText,
        },
      }}
      ref={ref}
      label={required ? `${label} *` : label}
    />
  )
}
