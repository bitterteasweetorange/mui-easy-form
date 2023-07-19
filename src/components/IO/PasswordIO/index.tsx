import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { IconButton } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import { ForwardedRef, forwardRef } from 'react'
import { useIO } from '../../useIO'
import { WordIO, WordIOProps } from '../WordIO'

export type PasswordIOProps = WordIOProps

/*
 * PasswordIO has a button to toggle the visibility of the password.
 *
 * related components:
 * - PasswordField: a uncontrolled PasswordIO for form
 *
 * It extends from WordIO, so you can use all WordIO props.
 *
 * For more info ,see:
 * https://bitterteasweetorange.github.io/mui-easy-form?path=/docs/io-passwordio--docs
 **/
export const PasswordIO = forwardRef(Base)
function Base(props: PasswordIOProps, ref: ForwardedRef<HTMLDivElement>) {
  const showPassword = useIO(false)

  return (
    <WordIO
      {...props}
      ref={ref}
      type={showPassword.value ? 'text' : 'password'}
      InputProps={{
        ...props.InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                showPassword.onChange((pre) => !pre)
              }}
              onMouseDown={(e) => {
                e.preventDefault()
              }}
              edge="end"
            >
              {showPassword.value ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
