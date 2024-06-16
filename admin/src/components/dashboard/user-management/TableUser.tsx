'use client'

import MuiTable from '@/components/common/MuiTable'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import { GridColDef } from '@mui/x-data-grid'

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
          <Typography variant='subtitle2' component='p' fontWeight={600}>
            {params.value}
          </Typography>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email address',
      description: 'This column has a value getter and is not sortable.',
      width: 160,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Typography variant='subtitle2' component='p' fontWeight={600}>
            {params.value}
          </Typography>
        )
      }
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      width: 160,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Typography variant='subtitle2' component='p' fontWeight={600}>
            {params.value}
          </Typography>
        )
      }
    }
  ]

  return <MuiTable listUsers={listUsers} columns={columns} />
}

export default TableUser
