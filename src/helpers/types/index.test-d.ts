import { ReactNode } from 'react'
import { expectAssignable } from 'tsd'
import { ControlledProps, FieldWrapper } from '.'

// TODO:tsd

const controlled: ControlledProps<string> = {
  value: '1',
  onChange: (val) => {
    return val
  },
}

expectAssignable<{
  value: string | null
  onChange: (nextValue: string | null) => void
}>(controlled)

const fieldProps: FieldWrapper<
  {
    a: boolean
    onChange: (e: React.ChangeEventHandler<HTMLDivElement>) => void
    helperText?: ReactNode
  },
  { b: string; c: boolean }
> = {
  a: true,
  name: 'b',
}

expectAssignable<{
  a: boolean
  name: 'b' | 'c'
}>(fieldProps)
