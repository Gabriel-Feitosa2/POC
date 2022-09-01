// types
import { DataGridPropsTypes } from './types'

// material
import { useMediaQuery } from '@mui/material'

// components
import TableDesktop from './Desktop'
import TableMobile from './Mobile'

function TableHistoryOfNegotiations<T extends DataGridPropsTypes>(props: T) {
  const isDesktop = useMediaQuery('(min-width:1133px)')
  const { layout } = props

  return isDesktop ? <TableDesktop {...props} {...layout} /> : <TableMobile />
}

export default TableHistoryOfNegotiations
