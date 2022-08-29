// material
import { DataGrid } from '@mui/x-data-grid'

import { TableHistoryOfNegotiationsProps } from '../types'
import { TableContainer } from './styles'

function TableHistoryOfNegotiations({ columns, rows }: TableHistoryOfNegotiationsProps) {
  return (
    <TableContainer>
      <DataGrid
        autoHeight
        disableColumnMenu
        rowHeight={80}
        rows={rows}
        columns={columns}
        getRowId={(id) => id.order_id}
      />
    </TableContainer>
  )
}

export default TableHistoryOfNegotiations
