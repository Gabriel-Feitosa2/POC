import { Badge, Button, Chip } from '@mui/material'
import MaterialTable from 'material-table'
import Data from '../data/data.json'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import WarningIcon from '@mui/icons-material/Warning'
import ReceiptIcon from '@mui/icons-material/Receipt'
import { Resposive } from './style'

interface Props {
  tipo: string
  produto: string
  complice: boolean
  comercial: boolean
  contratos: boolean
  status: string
  adm: string
}

function Home() {
  const columns = [
    {
      title: 'Tipo / Produto',
      field: 'tipo',
      render: (rowData: Props) => (
        <div>
          {rowData.tipo == 'FIXAÇÃO' ? (
            <>
              <Chip label='Fixação' sx={{ backgroundColor: '#bbdefb', color: '#1565C0' }} />
              {rowData.produto}
            </>
          ) : (
            <>
              <Chip
                label='Compra'
                sx={{
                  color: '#1b5e20',
                  backgroundColor: '#c8e6c9',
                }}
              />
              {rowData.produto}
            </>
          )}
        </div>
      ),
    },
    { title: 'Data', field: 'data' },
    { title: 'Preço', field: 'preco' },
    { title: 'Volume', field: 'volume' },
    { title: 'Vendedor', field: 'vendedor' },
    { title: 'idInterno', field: 'idInterno' },
    { title: 'Carteira', field: 'carteira' },
    { title: 'Data de Entrega', field: 'dataEntrega' },
    {
      title: 'Complice',
      field: 'complice',
      render: (rowData: Props) =>
        rowData.complice === true ? (
          <CheckBoxIcon color='success' />
        ) : (
          <DisabledByDefaultRoundedIcon color='error' />
        ),
    },
    {
      title: 'Comercial',
      field: 'comercial',
      render: (rowData: Props) =>
        rowData.comercial === true ? (
          <CheckBoxIcon color='success' />
        ) : (
          <DisabledByDefaultRoundedIcon color='error' />
        ),
    },
    {
      title: 'Contratos',
      field: 'contratos',
      render: (rowData: Props) =>
        rowData.contratos === true ? (
          <CheckBoxIcon color='success' />
        ) : (
          <DisabledByDefaultRoundedIcon color='error' />
        ),
    },
    {
      title: 'ADM',
      field: 'adm',
      render: (rowData: Props) =>
        rowData.adm === 'empty' ? (
          <CheckBoxOutlineBlankIcon />
        ) : (
          <WarningIcon sx={{ backgroundColor: '#fdd835', borderRadius: '5px', color: 'white' }} />
        ),
    },
    {
      title: 'Docs',
      field: 'docs',
      render: () => (
        <Badge badgeContent={1} color='primary'>
          <ReceiptIcon />
        </Badge>
      ),
    },
    {
      title: 'Status',
      field: 'status',
      render: (rowData: Props) =>
        rowData.status === 'Confirmado' ? (
          <Button size='small' variant='contained' color='success' sx={{ borderRadius: '25px' }}>
            Confirmado
          </Button>
        ) : (
          <Button size='small' variant='contained' color='error' sx={{ borderRadius: '25px' }}>
            Cancelado
          </Button>
        ),
    },
  ]

  return (
    <Resposive>
      <MaterialTable
        columns={columns}
        data={Data}
        options={{
          fixedColumns: {
            left: 6,
            right: 0,
          },
          search: false,
          paging: false,
          sorting: false,
          showTitle: false,
        }}
      />
    </Resposive>
  )
}

export default Home
