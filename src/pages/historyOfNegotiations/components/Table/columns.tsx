import { ColumnsProps, RowsProps } from './types'
import { GridRenderCellParams } from '@mui/x-data-grid'
import ChipProductType from '../../../../components/ChipProductType'

const columns = [
  {
    headerName: 'Tipo / Produto',
    field: 'type',
    width: '120',
    renderCell: (params: GridRenderCellParams) => (
      <div>
        <ChipProductType label={params.value} productType={params.value} />
      </div>
    ),
  },
  {
    headerName: 'Data',
    width: '120',
    field: 'initial_delivery_date',
  },
  {
    headerName: 'Preço',
    field: 'price',
    width: '120',
    valueGetter: (params: GridRenderCellParams) =>
      `${params.row.price || ''} ${params.row.currency_code || ''}`,
  },
  {
    headerName: 'Volume',
    field: 'commitment_amount',
    width: '120',
    valueGetter: (params: GridRenderCellParams) =>
      `${params.row.commitment_amount || ''} ${params.row.unit_of_measurement_code || ''}`,
  },
  {
    headerName: 'Vendedor',
    field: 'producer_name',
    width: '120',
  },
  {
    headerName: 'idInterno',
    field: 'order_id',
    width: '120',
  },
  {
    headerName: 'Carteira',
    field: 'wallets',
    width: '120',
  },
  {
    headerName: 'Data de Entrega',
    field: 'end_delivery_date',
    width: '120',
  },
  {
    headerName: 'Compliance',
    field: 'compliance_status',
  },
  {
    headerName: 'Comercial',
    field: 'commercial_status',
    width: '120',
  },
  {
    headerName: 'Contratos',
    field: 'contracts_status',
    width: '120',
  },
  {
    headerName: 'ADM',
    field: 'administrative_status',
    width: '120',
  },
  {
    headerName: 'Status',
    field: 'status',
    width: '120',
  },
] as ColumnsProps[]

export default columns
