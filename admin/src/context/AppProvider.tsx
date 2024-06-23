'use client'
import { clientSessionToken } from "@/utils/http"
import { ReactNode, useState } from "react"

interface Props {
  children: ReactNode
  initialToken?: string
}

const AppProvider = ({ children, initialToken = '' }: Props)=> {

  useState(()=> {
    if(typeof window !== undefined) {
      clientSessionToken.value = initialToken
    }
  })

  return (
    <>{children}</>
  )
}

export default AppProvider