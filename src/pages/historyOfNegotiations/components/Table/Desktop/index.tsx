// material
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material'

import { RowsProps, TableHistoryOfNegotiationsProps } from '../Table.types'
import { Table, TableContainer } from './styles'

function TableHistoryOfNegotiations({ columns, rows }: TableHistoryOfNegotiationsProps) {
  return (
    <TableContainer>
      <Table aria-label='Histórico de Negociações'>
        <TableHead>
          <TableRow>
            {columns.map((columns) => (
              <TableCell key={columns.value}>{columns.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: RowsProps) => {
            return (
              <TableRow
                key={row.order_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {columns.map((column) => {
                  return column.value !== 'wallets' ? (
                    <TableCell key={column.value}>{row[column.value]}</TableCell>
                  ) : (
                    <TableCell key={column.value}>
                      {row[column.value].map((wallet) => (
                        <span key={wallet.id}>{`${wallet.name}, `}</span>
                      ))}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableHistoryOfNegotiations
