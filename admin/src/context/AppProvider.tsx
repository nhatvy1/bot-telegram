'use client'
import { clientSessionToken } from '@/utils/http'
import { ReactNode, useState } from 'react'

const AppProvider = ({
  children,
  initialSessionToken = ''
}: {
  children: ReactNode
  initialSessionToken?: string
}) => {
  useState(() => {
    if (typeof window !== 'undefined') {
      clientSessionToken.value = initialSessionToken
    }
  })

  return <>{children}</>
}

export default AppProvider

