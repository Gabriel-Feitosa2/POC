import { ColumnsProps } from './types'

const columns = [
  {
    title: 'Tipo / Produto',
    value: 'type',
  },
  {
    title: 'Data',
    value: 'initial_delivery_date',
  },
  {
    title: 'Preço',
    value: 'price',
  },
  {
    title: 'Volume',
    value: 'commitment_amount',
  },
  {
    title: 'Vendedor',
    value: 'producer_name',
  },
  {
    title: 'idInterno',
    value: 'order_id',
  },
  {
    title: 'Carteira',
    value: 'wallets',
  },
  {
    title: 'Data de Entrega',
    value: 'end_delivery_date',
  },
  {
    title: 'Compliance',
    value: 'compliance_status',
  },
  {
    title: 'Comercial',
    value: 'commercial_status',
  },
  {
    title: 'Contratos',
    value: 'contracts_status',
  },
  {
    title: 'ADM',
    value: 'administrative_status',
  },
  {
    title: 'Status',
    value: 'status',
  },
] as ColumnsProps[]

export default columns

