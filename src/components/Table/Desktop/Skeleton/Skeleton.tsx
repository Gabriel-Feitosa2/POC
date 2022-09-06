import { Skeleton } from '@mui/material'
import { TableDesktopLoadingProps } from '../../types'

function TableDesktopLoading<TypeColumns, TypeRows>({
  rows,
  columns,
}: TableDesktopLoadingProps<TypeColumns, TypeRows>) {
  return (
    <table>
      {rows.map((rows: TypeRows, index: number) => (
        <tr key={index}>
          {columns.map((columns: TypeColumns, index: number) => (
            <td key={index}>
              <Skeleton width={150} height={32} />
            </td>
          ))}
        </tr>
      ))}
    </table>
  )
}

export default TableDesktopLoading
