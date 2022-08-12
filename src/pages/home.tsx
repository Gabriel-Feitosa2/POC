import DataTable from '../components/table'
import Data from '../data/data.json'

function Home() {
  const colNames = [
    {
      title: 'Tipo / Produto',
      value: 'tipo',
    },
    {
      title: 'Tipo / Produto',
      value: 'produto',
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
      title: 'Status',
      value: 'status',
    },
  ]
  return (
    <div>
      <DataTable colNames={colNames} list={Data} />
    </div>
  )
}

export default Home
