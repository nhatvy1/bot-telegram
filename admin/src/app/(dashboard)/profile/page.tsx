import accountRequest from '@/app/apiRequest/account'
import { cookies } from 'next/headers'

const ProfilePage = async () => {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  console.log('Check session token: ', sessionToken)

  const res = await accountRequest.getProfile(sessionToken?.value ?? '')

  return <div>Profile</div>
}

export default ProfilePage
