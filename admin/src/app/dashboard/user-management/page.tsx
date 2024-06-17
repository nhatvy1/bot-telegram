import { getUser } from '@/app/actions/user'
import TableUser from '@/components/dashboard/user-management/TableUser'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const UserManagement = async () => {
  const data = await getUser()

  return (
    <Box sx={{ width: '100%' }}>
      <title>User Management</title>
      <Typography variant='h1' sx={{ fontSize: '24px' }}>User Management</Typography>
      <Box>
        <TableUser listUsers={data?.result?.result}/>
      </Box>
    </Box>
  )
}

export default UserManagement
