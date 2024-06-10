'use server'

import http from '@/utils/http'

export const login = async (data: any) => {
  const res = await http.post<IResLogin>('auth/login', data)
  return res
}
