// material
import { useMediaQuery } from '@mui/material'

// components
import TableDesktop from './Desktop'
import TableMobile from './Mobile'

// types
import { TableProps } from './types'

function Table<TypeColumns, TypeRows, TypeSkeleton>(
  props: TableProps<TypeColumns, TypeRows, TypeSkeleton>,
) {
  const isDesktop = useMediaQuery('(min-width:1133px)')

  return isDesktop ? <TableDesktop {...props} /> : <TableMobile />
}

export default Table
