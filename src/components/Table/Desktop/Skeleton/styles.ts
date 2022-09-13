// libraries/frameworks
import styled, { css } from 'styled-components'

// material
import {
  Skeleton as SkeletonMUI,
  Table as TableMUI,
  TableBody as TableBodyMUI,
  TableCell as TableCellMUI,
  TableHead as TableHeadMUI,
  TableRow as TableRowMUI,
} from '@mui/material'

export const Table = styled(TableMUI)``
export const TableBody = styled(TableBodyMUI)``
export const TableCell = styled(TableCellMUI)``
export const TableHead = styled(TableHeadMUI)``
export const TableRow = styled(TableRowMUI)``

export const Skeleton = styled(SkeletonMUI).attrs(() => ({
  height: 32,
  variant: 'rectangular',
}))`
  ${({ theme }) => css``}
`
