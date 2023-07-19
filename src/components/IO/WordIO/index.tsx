import ClearIcon from '@mui/icons-material/Clear'
import {
  IconButton,
  TextField,
  TextFieldProps,
  useFormControl,
} from '@mui/material'
import { isNil } from 'lodash-es'
import { ForwardedRef, ReactNode, forwardRef } from 'react'
import { ControlledProps } from '../../../helpers/types'

export type WordIOProps = ControlledProps<string> &
  TextIOAdditionProps &
  Omit<TextFieldProps, 'value' | 'onChange' | 'defaultValue'>

/**
 * WordIO let users enter and edit text.
 *
 * related components:
 * - WordField: a uncontrolled WordIO for form
 * - NumberIO: type=number
 * - PasswordIO: type=password
 *
 * It extends from TextField, so you can use all TextField props except 'value', 'onChange' and 'defaultValue' because WordIO is a controlled component.
 *
 * It also has 2 addition props:
 * - clearable: If true, the input shows a clear icon if the value is not empty.
 * - clearIcon: The icon to display in place of the default clear icon.
 *
 * For more info ,see:
 * https://bitterteasweetorange.github.io/mui-easy-form?path=/docs/io-wordio--docs
 */
export const WordIO = forwardRef(Base)
function Base(props: WordIOProps, ref: ForwardedRef<HTMLDivElement>) {
  const {
    // controlled props
    value,
    onChange,
    // addition
    clearIcon = <ClearIcon fontSize="small" />,
    clearable,
    // TextField props
    ...rawProps
  } = props

  const { disabled } = rawProps

  const showClearIcon = clearable && !disabled && value !== '' && value !== null

  return (
    <TextField
      {...rawProps}
      ref={ref}
      // convert null to ''
      value={isNil(value) ? '' : value}
      onChange={(e) => {
        const nextValue = e.target.value
        onChange(nextValue === '' ? null : nextValue)
      }}
      InputProps={{
        ...rawProps.InputProps,
        endAdornment: (
          <>
            {showClearIcon && (
              <ClearIconAdornment
                clearIcon={clearIcon}
                onClear={() => {
                  onChange(null)
                }}
              />
            )}
            {rawProps.InputProps?.endAdornment}
          </>
        ),
      }}
      sx={{
        ...rawProps?.sx,
        // hover the input to show the clear icon
        ':hover .MuiButtonBase-root': {
          visibility: 'visible',
        },
      }}
    />
  )
}

function ClearIconAdornment({
  clearIcon,
  onClear,
}: {
  clearIcon: ReactNode
  onClear: () => void
}) {
  const { focused } = useFormControl() || {}
  return (
    <IconButton
      size="small"
      sx={{
        // visible when Input focused or hovered
        visibility: focused ? 'visible' : 'hidden',
      }}
      onClick={() => onClear()}
    >
      {clearIcon}
    </IconButton>
  )
}

export type TextIOAdditionProps = {
  /**
   * The icon to display in place of the default clear icon.
   */
  clearIcon?: ReactNode
  /**
   * If true, the input shows a clear icon if the value is not empty.
   */
  clearable?: boolean
}
