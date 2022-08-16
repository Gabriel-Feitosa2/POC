import { CheckBox } from '@mui/icons-material'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault'
import { Button, Chip } from '@mui/material'
import DataTable from '../components/table/table'

function Home() {
  const colNames = [
    {
      title: 'Tipo / Produto',
      value: 'tipo',
    },
    {
      title: 'Data',
      value: 'data',
    },
    {
      title: 'Preço',
      value: 'preco',
    },
    {
      title: 'Volume',
      value: 'volume',
    },
    {
      title: 'Vendedor',
      value: 'vendedor',
    },
    {
      title: 'idInterno',
      value: 'idInterno',
    },
    {
      title: 'Carteira',
      value: 'carteira',
    },
    {
      title: 'Data de Entrega',
      value: 'dataEntrega',
    },
    {
      title: 'Compliance',
      value: 'compliance',
    },
    {
      title: 'Comercial',
      value: 'comercial',
    },
    {
      title: 'Contratos',
      value: 'contratos',
    },
    {
      title: 'Status',
      value: 'status',
    },
  ]

  const list = [
    {
      id: 1,
      tipo: (
        <>
          <Chip label='Fixação' sx={{ backgroundColor: '#bbdefb', color: '#1565C0' }} />
          Soja
        </>
      ),
      data: '11/12/2022 ás 15:59',
      preco: '1.946,55',
      volume: '1.946,55',
      vendedor: 'Antonio Domingos Debastiane',
      idInterno: 'Contrado123',
      carteira: 'ComVendedor',
      dataEntrega: '13/04/22 até 13/05/22',
      compliance: <CheckBox color='success' />,
      comercial: <CheckBox color='success' />,
      contratos: <CheckBox color='success' />,
      status: (
        <Button size='small' variant='contained' color='success' sx={{ borderRadius: '25px' }}>
          Confirmado
        </Button>
      ),
    },
    {
      id: 2,
      tipo: (
        <>
          <Chip
            label='Compra'
            sx={{
              color: '#1b5e20',
              backgroundColor: '#c8e6c9',
            }}
          />
          Soja em Grãos
        </>
      ),
      data: '11/12/2022 ás 15:59',
      preco: '1.946,55',
      volume: '1.946,55',
      vendedor: 'Cesar Filho dos Santos Vendedor',
      idInterno: 'Contrado123',
      carteira: 'Carteira Copagri',
      dataEntrega: '13/04/22 até 20/04/22',
      compliance: <CheckBox color='success' />,
      comercial: <CheckBox color='success' />,
      contratos: <DisabledByDefaultIcon color='error' />,
      status: (
        <Button size='small' variant='contained' color='error' sx={{ borderRadius: '25px' }}>
          Cancelado
        </Button>
      ),
    },
    {
      id: 3,
      tipo: (
        <>
          <Chip
            label='Compra'
            sx={{
              color: '#1b5e20',
              backgroundColor: '#c8e6c9',
            }}
          />
          Biodiesel
        </>
      ),
      data: '11/12/2022 ás 15:59',
      preco: '1.946,55',
      volume: '1.946,55',
      vendedor: 'Felipe Ferreira Santos',
      idInterno: 'Contrado123',
      carteira: 'Carteira Nova',
      dataEntrega: '13/04/22 até 13/05/22',
      compliance: <CheckBox color='success' />,
      comercial: <CheckBox color='success' />,
      contratos: <DisabledByDefaultIcon color='error' />,
      status: (
        <Button size='small' variant='contained' color='error' sx={{ borderRadius: '25px' }}>
          Cancelado
        </Button>
      ),
    },
    {
      id: 4,
      tipo: (
        <>
          <Chip
            label='Compra'
            sx={{
              color: '#1b5e20',
              backgroundColor: '#c8e6c9',
            }}
          />
          Biodiesel Refinado
        </>
      ),
      data: '11/12/2022 ás 15:59',
      preco: '1.946,55',
      volume: '1.946,55',
      vendedor: 'Samara Santos',
      idInterno: 'Contrado123',
      carteira: 'TestCard',
      dataEntrega: '13/04/22 até 19/05/22',
      compliance: <CheckBox color='success' />,
      comercial: <CheckBox color='success' />,
      contratos: <CheckBox color='success' />,
      status: (
        <Button size='small' variant='contained' color='success' sx={{ borderRadius: '25px' }}>
          Confirmado
        </Button>
      ),
    },
  ]
  return (
    <div>
      <DataTable colNames={colNames} list={list} />
    </div>
  )
}

export default Home
