import { DatePicker, DatePickerProps } from '@mui/x-date-pickers'
import { ForwardedRef, forwardRef } from 'react'
import { ControlledProps } from '../../../helpers/types'

export type DateIOProps = ControlledProps<number> &
  Omit<DatePickerProps<number>, 'value' | 'onChange' | 'renderInput'>

export const DateIO = forwardRef(Base)
function Base(props: DateIOProps, ref: ForwardedRef<HTMLDivElement>) {
  return <DatePicker ref={ref} views={['year', 'month', 'day']} {...props} />
}
