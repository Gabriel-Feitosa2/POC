// types
import { TableProps } from '../types'

// material
import { DataGrid } from '@mui/x-data-grid'
import { TableContainer } from './styles'

function TableDesktop<TypeColumns, TypeRows>(props: TableProps<TypeColumns, TypeRows>) {
  return (
    <TableContainer>
      <DataGrid {...props} />
    </TableContainer>
  )
}

export default TableDesktop
