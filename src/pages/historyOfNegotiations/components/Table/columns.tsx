import { ColumnsProps, RowsProps } from './types'
import { GridRenderCellParams } from '@mui/x-data-grid'
import ChipProductType from '../../../../components/ChipProductType'
import CheckboxProductType from '../../../../components/WorkflowStatus'

const columns = [
  {
    headerName: 'Tipo / Produto',
    field: 'type',
    width: '130',
    renderCell: (params: GridRenderCellParams) => (
      <div>
        <ChipProductType label={params.value} productType={params.value} />
      </div>
    ),
  },
  {
    headerName: 'Data',
    width: '110',
    field: 'initial_delivery_date',
  },
  {
    headerName: 'Preço',
    field: 'price',
    width: '90',
    valueGetter: (params: GridRenderCellParams) =>
      `${params.row.price || ''} ${params.row.currency_code || ''}`,
  },
  {
    headerName: 'Volume',
    field: 'commitment_amount',
    width: '100',
    valueGetter: (params: GridRenderCellParams) =>
      `${params.row.commitment_amount || ''} ${params.row.unit_of_measurement_code || ''}`,
  },
  {
    headerName: 'Vendedor',
    field: 'producer_name',
    width: '140',
  },
  {
    headerName: 'idInterno',
    field: 'order_id',
    width: '130',
  },
  {
    headerName: 'Carteira',
    field: 'wallets',
    width: '140',
  },
  {
    headerName: 'Data de Entrega',
    field: 'end_delivery_date',
    width: '145',
  },
  {
    headerName: 'Compliance',
    field: 'compliance_status',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <div>
        <CheckboxProductType productType={params.value} />
      </div>
    ),
  },
  {
    headerName: 'Comercial',
    field: 'commercial_status',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <div>
        <CheckboxProductType productType={params.value} />
      </div>
    ),
  },
  {
    headerName: 'Contratos',
    field: 'contracts_status',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <div>
        <CheckboxProductType productType={params.value} />
      </div>
    ),
  },
  {
    headerName: 'ADM',
    field: 'administrative_status',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <div>
        <CheckboxProductType productType={params.value} />
      </div>
    ),
  },
  {
    headerName: 'Status',
    field: 'status',
  },
] as ColumnsProps[]

export default columns
