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

export type TextIOProps = ControlledProps<string> &
  TextIOAdditionProps &
  Omit<TextFieldProps, 'value' | 'onChange'>

export const TextIO = forwardRef(Base)
function Base(props: TextIOProps, ref: ForwardedRef<HTMLDivElement>) {
  const {
    // controlled props
    value,
    onChange,
    // addition
    clearIcon = <ClearIcon fontSize="small" />,
    disableClearable,
    // TextField props
    ...rawProps
  } = props

  const { disabled } = rawProps

  const hasClearIcon =
    !disableClearable && !disabled && value !== '' && value !== null

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
            {hasClearIcon && (
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
   * @default: false
   * If true, the input can't be cleared.
   */
  disableClearable?: boolean
}
