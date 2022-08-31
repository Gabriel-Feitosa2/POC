// material
import { useMediaQuery } from '@mui/material'

// components
import TableDesktop from './Desktop'
import TableMobile from './Mobile'

import { TableHistoryOfNegotiationsProps } from './types'

function TableHistoryOfNegotiations({ columns, rows, layout }: TableHistoryOfNegotiationsProps) {
  const isDesktop = useMediaQuery('(min-width:1133px)')

  return isDesktop ? (
    <TableDesktop columns={columns} rows={rows} layout={layout} />
  ) : (
    <TableMobile />
  )
}

export default TableHistoryOfNegotiations
