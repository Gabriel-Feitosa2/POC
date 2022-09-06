// material
import { DataGrid } from '@mui/x-data-grid'

// components
import TableDesktopLoading from './Skeleton/Skeleton'

// types
import { TableProps } from '../types'

// style
import * as Styled from './styles'

function TableDesktop<TypeColumns, TypeRows>(props: TableProps<TypeColumns, TypeRows>) {
  return (
    <Styled.TableContainer>
      {props.loading ? <TableDesktopLoading {...props} /> : <DataGrid {...props} />}
    </Styled.TableContainer>
  )
}

export default TableDesktop
