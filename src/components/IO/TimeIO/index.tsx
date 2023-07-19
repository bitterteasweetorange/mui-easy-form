import { TimePicker, TimePickerProps } from '@mui/x-date-pickers'
import { ForwardedRef, forwardRef } from 'react'
import { ControlledProps } from '../../../helpers/types'

export type TimeIOProps = ControlledProps<number> &
  Omit<TimePickerProps<number>, 'value' | 'onChange'>

export const TimeIO = forwardRef(Base)
function Base(props: TimeIOProps, ref: ForwardedRef<HTMLDivElement>) {
  return <TimePicker {...props} ref={ref} />
}
