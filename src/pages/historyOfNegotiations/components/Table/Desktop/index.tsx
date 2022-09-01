// types
import { DataGridPropsTypes } from '../types'

// material
import { DataGrid } from '@mui/x-data-grid'
import { TableContainer } from './styles'

function TableHistoryOfNegotiations<T extends DataGridPropsTypes>(props: T) {
  const { layout } = props

  return (
    <TableContainer>
      <DataGrid {...props} {...layout} />
    </TableContainer>
  )
}

export default TableHistoryOfNegotiations
