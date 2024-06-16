import { getUser } from '@/app/actions/user'
import TableUser from '@/components/dashboard/user-management/TableUser'

const UserManagement = async () => {
  const data = await getUser()

  return (
    <div>
      <title>Quản lý người dùng</title>
      <h1>Quản lý người dùng</h1>
      <div>
        <TableUser listUsers={data?.result?.result}/>
      </div>
    </div>
  )
}

export default UserManagement
