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
    />
  )
}

export default MuiTable
