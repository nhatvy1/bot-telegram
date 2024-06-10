import http from '@/utils/http'

const authApiRequest = {
  auth: (body: { sessionToken: string }) =>
    http.post('api/auth', body, { baseUrl: '' })
}

export default authApiRequest