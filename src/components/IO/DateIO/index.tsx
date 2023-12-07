import { DatePicker, DatePickerProps } from '@mui/x-date-pickers'
import { ForwardedRef, forwardRef } from 'react'
import { ControlledProps } from '../../../helpers/types'

export type DateIOProps = ControlledProps<number> &
  Omit<DatePickerProps<number>, 'value' | 'onChange'>

export const DateIO = forwardRef(Base)
function Base(props: DateIOProps, ref: ForwardedRef<HTMLDivElement>) {
  const { label, required, helperText, error, disabled, ...datePickerProps } =
    props
  return (
    <DatePicker
      {...datePickerProps}
      slotProps={{
        textField: {
          disabled,
          error,
          helperText,
        },
      }}
      ref={ref}
      views={['year', 'month', 'day']}
      label={required ? `${label} *` : label}
    />
  )
}
