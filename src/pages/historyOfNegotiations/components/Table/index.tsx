// types
import { TableProps } from './types'

// material
import { useMediaQuery } from '@mui/material'

// components
import TableDesktop from './Desktop'
import TableMobile from './Mobile'

function Table<TypeColumns, TypeRows>(props: TableProps<TypeColumns, TypeRows>) {
  const isDesktop = useMediaQuery('(min-width:1133px)')

  return isDesktop ? <TableDesktop {...props} /> : <TableMobile />
}

export default Table
