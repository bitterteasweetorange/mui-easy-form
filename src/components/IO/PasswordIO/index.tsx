import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { IconButton } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import { ForwardedRef, forwardRef } from 'react'
import { useIO } from '../../useIO'
import { TextIO, TextIOProps } from '../TextIO'

export type PasswordIOProps = TextIOProps

/*
 * PasswordIO extends from TextIO
 **/
export const PasswordIO = forwardRef(Base)
function Base(props: PasswordIOProps, ref: ForwardedRef<HTMLDivElement>) {
  const showPassword = useIO(false)

  return (
    <TextIO
      {...props}
      ref={ref}
      type={showPassword.value ? 'text' : 'password'}
      InputProps={{
        ...props.InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
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
