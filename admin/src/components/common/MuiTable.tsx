'use client'

import { DataGrid } from '@mui/x-data-grid'

interface Props {
  listUsers: IUser[]
  columns: any
}

const MuiTable = ({ listUsers, columns }: Props) => {
  return (
    <DataGrid
      rows={listUsers}
      columns={columns}
      pageSizeOptions={[5, 10]}
      hideFooterPagination
      rowSelection={false}
      sx={{
        '& .MuiDataGrid-cell': {
          display: 'flex',
          alignItems: 'center'
        },
        '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
          outline: 'none !important'
        },
        '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus':
          {
            outline: 'none !important'
          }
      }}
    />
  )
}

export default MuiTable
