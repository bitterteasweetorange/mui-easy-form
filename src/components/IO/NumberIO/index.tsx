import { isNil } from 'lodash-es'
import { ForwardedRef, forwardRef } from 'react'
import { ControlledProps } from '../../../helpers/types'
import { TextIO, TextIOProps } from '../TextIO'

export type NumberIOProps = Omit<TextIOProps, 'value' | 'onChange'> &
  ControlledProps<number>

/*
 * NumberIO extends from TextIO, but numbers are allowed only.
 **/
export const NumberIO = forwardRef(Base)
function Base(props: NumberIOProps, ref: ForwardedRef<HTMLDivElement>) {
  const { value, onChange, ...restProps } = props

  return (
    <TextIO
      {...restProps}
      ref={ref}
      type="number"
      value={isNil(value) ? null : String(value)}
      onChange={(nextValue) => {
        onChange(nextValue === null ? null : Number(nextValue))
      }}
    />
  )
}

export type NumberEmptyValue = null
