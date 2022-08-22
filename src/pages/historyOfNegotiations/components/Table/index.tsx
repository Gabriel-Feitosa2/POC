// material
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

// import ProductType from './ProductType'

interface Props {
  colNames: { title: string; value: string }[]
  rows: any[]
}

function TableHistoryOfNegotiations({ colNames, rows }: Props) {
  return (
    <>
      {/* <ProductType type='COMPRA' />
      <ProductType type='VENDA' /> */}

      <TableContainer component={Paper} sx={{ padding: '24px' }}>
        <Table sx={{ minWidth: 400 }} size='medium' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              {colNames.map((colNames) => (
                <TableCell key={colNames.value}>{colNames.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((item) => (
              <TableRow
                key={item.order_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {Object.values(colNames).map((col, index) => (
                  <TableCell key={index}>{item[col.value]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TableHistoryOfNegotiations
