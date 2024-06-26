'use client'

import { clientSessionToken } from "@/utils/http"

const DemoPage = ()=> {
  console.log('Check token: ', clientSessionToken)
  return (
    <div></div>
  )
}

export default DemoPage