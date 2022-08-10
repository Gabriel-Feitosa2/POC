import * as React from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AddIcon from '@mui/icons-material/Add'
import RefreshIcon from '@mui/icons-material/Refresh'
import DataTable from './table'

export default function TableEmpty() {
  const [active, setActive] = React.useState(true)

  return (
    <>
      {active === true && (
        <TableContainer component={Paper} sx={{ padding: '24px' }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>Tipo / Produto</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell>Volume</TableCell>
                <TableCell>ID Interno</TableCell>
                <TableCell>Data e Hora</TableCell>
                <TableCell>Vendedor</TableCell>
                <TableCell>Compliance</TableCell>
                <TableCell>Comercial</TableCell>
                <TableCell>Contratos</TableCell>
                <TableCell>ADM</TableCell>
                <TableCell>Status / Docs</TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '12rem',
            }}
          >
            <Typography sx={{ margin: '5px' }}>Sem Negociações no momento.</Typography>
            <Typography sx={{ margin: '5px' }}>
              Faça uma <strong> Nova Oferta</strong>
            </Typography>
            <Button variant='contained' sx={{ margin: '5px' }}>
              <AddIcon /> Nova oferta
            </Button>
            <Button sx={{ margin: '5px', color: 'black' }} onClick={() => setActive(false)}>
              <RefreshIcon /> Atualizar
            </Button>
          </Box>
        </TableContainer>
      )}
      {active === false && <DataTable />}
    </>
  )
}
