import { OrderTypesProps } from '~/components/ChipProductType/types'
import { StatusWorkflowProps } from '~/components/WorkflowStatus/types'
import { GridColDef } from '@mui/x-data-grid'

export type Columns =
  | 'type'
  | 'initial_delivery_date'
  | 'price'
  | 'commitment_amount'
  | 'producer_name'
  | 'order_id'
  | 'wallets'
  | 'end_delivery_date'
  | 'compliance_status'
  | 'commercial_status'
  | 'contracts_status'
  | 'administrative_status'
  | 'status'

export type ColumnProps = {
  field: Columns
} & GridColDef

export type StatusOrderProps = 'FULFILLED'

export type WalletProps = {
  id: string
  name: string
}

export type UnitProps = 'sc' | 'm³'

export type CurrencyProps = 'BRL' | 'USD'

export type ProductProps = 'Soja' | 'Milho'

export type RowProps = {
  order_id: string
  price: string
  type: OrderTypesProps
  status: StatusOrderProps
  product_code: ProductProps
  currency_code: CurrencyProps
  unit_of_measurement_code: UnitProps
  commitment_amount: number
  initial_delivery_date: string
  end_delivery_date: string
  wallets: WalletProps[]
  compliance_status: StatusWorkflowProps
  commercial_status: StatusWorkflowProps
  contracts_status: StatusWorkflowProps
  administrative_status: StatusWorkflowProps
  producer_name: string
}

export type RowProps2 = {
  chaveUnica: string
  price: string
  type: OrderTypesProps
  status: StatusOrderProps
  product_code: ProductProps
  currency_code: CurrencyProps
  unit_of_measurement_code: UnitProps
  commitment_amount: number
  initial_delivery_date: string
  end_delivery_date: string
  wallets: WalletProps[]
  compliance_status: StatusWorkflowProps
  commercial_status: StatusWorkflowProps
  contracts_status: StatusWorkflowProps
  administrative_status: StatusWorkflowProps
  producer_name: string
}
