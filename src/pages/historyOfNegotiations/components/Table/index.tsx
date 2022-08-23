// material
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from '@mui/material'

// components
import TableDesktop from './Desktop'

import { TableHistoryOfNegotiationsProps } from './Table.types'

function TableHistoryOfNegotiations({ colNames, rows }: TableHistoryOfNegotiationsProps) {
  const isDesktop = useMediaQuery('(min-width:1133px)')

  return isDesktop ? <TableDesktop colNames={colNames} rows={rows} /> : <>Mobile Version</>
}

export default TableHistoryOfNegotiations
