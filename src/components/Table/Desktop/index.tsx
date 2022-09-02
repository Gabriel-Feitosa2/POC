// material
import { DataGrid } from '@mui/x-data-grid'

// types
import { TableProps } from '../types'

// style
import * as Styled from './styles'

function TableDesktop<TypeColumns, TypeRows>(props: TableProps<TypeColumns, TypeRows>) {
  return (
    <Styled.TableContainer>
      <DataGrid {...props} />
    </Styled.TableContainer>
  )
}

export default TableDesktop
