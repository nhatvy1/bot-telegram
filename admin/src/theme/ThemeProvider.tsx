'use client'

import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { baselightTheme } from './DefaultColors'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const MuiProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={baselightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiProvider
