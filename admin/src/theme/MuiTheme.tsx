'use client'
import { ReactNode } from 'react'
import { baselightTheme } from './DefaultColors'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

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
