import * as React from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Checkbox, TableBody } from '@mui/material'
import Data from '../data/data.json'
import ReceiptIcon from '@mui/icons-material/Receipt'

export default function DataTable() {
  return (
    <TableContainer component={Paper} sx={{ padding: '24px' }}>
      <Table sx={{ minWidth: 650 }} size='medium' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Tipo / Produto</TableCell>
            <TableCell>Data e Hora</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Volume</TableCell>
            <TableCell>Vendedor</TableCell>
            <TableCell>ID Interno</TableCell>
            <TableCell>Carteira</TableCell>
            <TableCell>Data de entrega</TableCell>
            <TableCell>Compliance</TableCell>
            <TableCell>Comercial</TableCell>
            <TableCell>Contratos</TableCell>
            <TableCell>ADM</TableCell>
            <TableCell>Status</TableCell>
            <TableCell> Docs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((post) => {
            return (
              <TableRow key={post.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                  {post.tipo} {post.produto}
                </TableCell>
                <TableCell>{post.data}</TableCell>
                <TableCell>R$/sc{post.preco}</TableCell>
                <TableCell>{post.volume} sacas</TableCell>
                <TableCell>{post.vendedor}</TableCell>
                <TableCell>{post.idInterno}</TableCell>
                <TableCell>{post.carteira}</TableCell>
                <TableCell>{post.dataEntrega}</TableCell>
                <TableCell>
                  <Checkbox color='success'></Checkbox>
                </TableCell>
                <TableCell>
                  <Checkbox color='success'></Checkbox>
                </TableCell>
                <TableCell>
                  <Checkbox sx={{ color: '#d32f2f' }}></Checkbox>
                </TableCell>
                <TableCell>
                  <Checkbox></Checkbox>
                </TableCell>
                <TableCell>{post.status}</TableCell>
                <TableCell>
                  <ReceiptIcon />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
