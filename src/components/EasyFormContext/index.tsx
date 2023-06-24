import { SxProps } from '@mui/material'
import { deepmerge } from '@mui/utils'
import React from 'react'
import { DeepPartial } from 'react-hook-form'
import { TextIOAdditionProps } from '../IO'

export type EasyFormProviderProps = {
  FieldGroup?: {
    sx?: SxProps
  }
  errorMessage: {
    required: string
  }
  Text?: TextIOAdditionProps
}

const defaultTheme: EasyFormProviderProps = {
  errorMessage: {
    required: 'required',
  },
}
export const EasyFormContext =
  React.createContext<EasyFormProviderProps>(defaultTheme)

export const EasyFormProvider = EasyFormContext.Provider

export const createEasyFormTheme: (
  theme: DeepPartial<EasyFormProviderProps>,
) => EasyFormProviderProps = (theme) => deepmerge(defaultTheme, theme)
