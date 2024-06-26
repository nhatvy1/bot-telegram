import { getUser } from '@/app/actions/user'
import TableUser from '@/components/dashboard/user-management/TableUser'
import Box from '@mui/material/Box'

const UserManagement = async () => {
  const data = await getUser()

  console.log(data?.result?.result)

  return (
    <Box sx={{ width: '100%' }}>
      <title>User Management</title>
      <Box>
        <TableUser listUsers={data?.result?.result}/>
      </Box>
    </Box>
  )
}

export default UserManagement
