import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { TableBody } from '@mui/material'
import { Resposive } from './style'

interface Props {
  colNames: { title: string; value: string }[]
  list: any[]
}

export default function DataTable({ colNames, list }: Props) {
  return (
    <Resposive>
      <TableContainer component={Paper} sx={{ padding: '24px' }}>
        <Table sx={{ minWidth: 400 }} size='medium' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              {colNames.map((colNames, key) => (
                <TableCell key={key}>{colNames.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item) => (
              <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {Object.values(colNames).map((col) => (
                  <TableCell className='teste' key={col.value}>
                    {item[col.value]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Resposive>
  )
}
