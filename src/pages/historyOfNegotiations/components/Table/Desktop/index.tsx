// material
import { DataGrid } from '@mui/x-data-grid'

import { TableHistoryOfNegotiationsProps } from '../types'

function TableHistoryOfNegotiations({ columns, rows }: TableHistoryOfNegotiationsProps) {
  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <DataGrid rowHeight={80} rows={rows} columns={columns} getRowId={(r) => r.order_id} />
    </div>
  )
}

export default TableHistoryOfNegotiations
