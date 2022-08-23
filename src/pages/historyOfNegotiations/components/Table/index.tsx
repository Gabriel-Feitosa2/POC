// material
import { useMediaQuery } from '@mui/material'

// components
import TableDesktop from './Desktop'
import TableMobile from './Mobile'

import { TableHistoryOfNegotiationsProps } from './Table.types'

function TableHistoryOfNegotiations({ columns, rows }: TableHistoryOfNegotiationsProps) {
  const isDesktop = useMediaQuery('(min-width:1133px)')

  return isDesktop ? <TableDesktop columns={columns} rows={rows} /> : <TableMobile />
}

export default TableHistoryOfNegotiations
