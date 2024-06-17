'use client'

import MuiTable from '@/components/common/MuiTable'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { GridColDef } from '@mui/x-data-grid'
import { IconCheck, IconTrash } from '@tabler/icons-react'
import { IconEdit } from '@tabler/icons-react'

interface Props {
  listUsers: IUser[]
}

const TableUser = ({ listUsers }: Props) => {
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Typography variant='subtitle2' component='p'>
            {params.value}
          </Typography>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email address',
      width: 160,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Typography variant='subtitle1' component='p'>
            {params.value}
          </Typography>
        )
      }
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      width: 160,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Typography variant='subtitle2' component='p'>
            {params.value}
          </Typography>
        )
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Chip
            icon={<IconCheck style={{ color: 'green' }} />}
            label='Accepted'
            sx={{
              background: '#fff',
              border: '1px solid green'
            }}
          />
        )
      }
    },
    {
      field: 'actions',
      headerName: 'Action',
      width: 160,
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
            <Tooltip title="Edit user">
              <Typography variant='subtitle2' component='div'>
                <IconEdit />
              </Typography>
            </Tooltip>
            <Tooltip title="Delete user">
              <Typography variant='subtitle2' component='div'>
                <IconTrash />
              </Typography>
            </Tooltip>
          </Box>
        )
      }
    }
  ]

  return <MuiTable listUsers={listUsers} columns={columns} />
}

export default TableUser
