import { isNil } from 'lodash-es'
import { ForwardedRef, forwardRef } from 'react'
import { ControlledProps } from '../../../helpers/types'
import { WordIO, WordIOProps } from '../WordIO'

export type NumberIOProps = Omit<WordIOProps, 'value' | 'onChange'> &
  ControlledProps<number>

/*
 * NumberIO extends from WordIO, but numbers are allowed only.
 * related components:
 *
 * - NumberField: a uncontrolled NumberIO for form
 *
 *  * For more info ,see:
 * https://bitterteasweetorange.github.io/mui-easy-form?path=/docs/io-numberio--docs
 **/
export const NumberIO = forwardRef(Base)
function Base(props: NumberIOProps, ref: ForwardedRef<HTMLDivElement>) {
  const { value, onChange, ...restProps } = props

  return (
    <WordIO
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
