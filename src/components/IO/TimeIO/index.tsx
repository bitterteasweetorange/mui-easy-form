import { TimePicker, TimePickerProps } from '@mui/x-date-pickers'
import { ForwardedRef, forwardRef } from 'react'
import { ControlledProps } from '../../../helpers/types'

export type TimeIOProps = ControlledProps<number> &
  Omit<TimePickerProps<number>, 'value' | 'onChange'>

export const TimeIO = forwardRef(Base)
function Base(props: TimeIOProps, ref: ForwardedRef<HTMLDivElement>) {
  const { label, required, helperText, error, disabled, ...datePickerProps } =
    props
  return (
    <TimePicker
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
