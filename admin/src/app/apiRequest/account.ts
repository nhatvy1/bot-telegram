import http from '@/utils/http'

const accountRequest = {
  getProfile: (sessionToken: string) =>
    http.get('user/profile', {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    })
}

export default accountRequest
