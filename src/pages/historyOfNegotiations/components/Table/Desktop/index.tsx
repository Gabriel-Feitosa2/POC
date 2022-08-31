// material
import { DataGrid } from '@mui/x-data-grid'

import { TableHistoryOfNegotiationsProps } from '../types'
import { TableContainer } from './styles'

function TableHistoryOfNegotiations(props: TableHistoryOfNegotiationsProps) {
  const { layout } = props

  return (
    <TableContainer>
      <DataGrid {...props} {...layout} />
    </TableContainer>
  )
}

export default TableHistoryOfNegotiations
