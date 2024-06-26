'use client'

import MuiTable from '@/components/common/MuiTable'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MuiModal from '@/components/common/MuiModal'
import { GridColDef } from '@mui/x-data-grid'
import {
  IconCheck,
  IconTrash,
  IconSquareLetterX,
  IconEdit
} from '@tabler/icons-react'
import { useState } from 'react'
import MuiPagination from '@/components/common/MuiPagination'
import {
  flexBetween,
  flexBetweenCenter,
  flexCenter
} from '@/theme/common.styles'
import Search from './Search'
import { useTheme } from '@mui/material'
import AddUpdateUser from './AddUpdateUser'

interface Props {
  listUsers: IUser[]
}

const TableUser = ({ listUsers }: Props) => {
  const [openUpdate, setOpenUpdate] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const [user, setUser] = useState<IUser | null>(null)

  const handleCloseModal = () => {
    setOpenUpdate(false)
    setOpenDelete(false)
    setUser(null)
  }

  const handleOpenDelete = () => {
    setOpenDelete(true)
  }

  const handleOpenModal = (user: IUser) => {
    setOpenUpdate(true)
    setUser(user)
  }

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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: 1,
              border: 'none'
            }}
          >
            <Tooltip title='Edit user'>
              <Button onClick={() => handleOpenModal(row)}>
                <IconEdit />
              </Button>
            </Tooltip>
            <Tooltip title='Delete user'>
              <Button onClick={() => handleOpenDelete()}>
                <IconTrash color='red' />
              </Button>
            </Tooltip>
          </Box>
        )
      }
    }
  ]

  return (
    <Box>
      <Box sx={{ ...flexCenter, gap: 2 }}>
        <Search />
      </Box>
      <MuiTable listUsers={listUsers} columns={columns} />

      <MuiPagination />

      <AddUpdateUser
        open={openUpdate}
        closeModal={handleCloseModal}
        user={user}
      />

      <MuiModal
        open={openDelete}
        closeModal={handleCloseModal}
        className={{ p: 0 }}
      >
        <Box
          sx={{
            ...flexBetweenCenter,
            px: 4,
            py: 2
          }}
        >
          <Typography component='p'>Are you sure</Typography>
          <Button
            sx={{
              padding: 0,
              minWidth: 0
            }}
          >
            <IconSquareLetterX color='red' onClick={() => handleCloseModal()} />
          </Button>
        </Box>
        <Typography component='p' sx={{ px: 4, py: 2, fontSize: '20px' }}>
          Are you sure you want to delete this file ?
        </Typography>
        <Typography component='p' sx={{ px: 4, py: 0, fontSize: '14px' }}>
          This action is permanent and cannot be undone
        </Typography>
        <Box
          sx={{
            ...flexBetween,
            px: 4,
            py: 2,
            gap: 2
          }}
        >
          <Button
            sx={{
              background: '#f05251',
              color: 'white',
              width: '50%',
              '&.MuiButton-root:hover': {
                bgcolor: 'red'
              }
            }}
          >
            Delete
          </Button>
          <Button
            sx={{ width: '50%', border: '1px solid lightgray', color: 'black' }}
          >
            Cancel
          </Button>
        </Box>
      </MuiModal>
    </Box>
  )
}

export default TableUser
