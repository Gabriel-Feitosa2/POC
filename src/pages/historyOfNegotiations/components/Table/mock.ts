/* eslint-disable camelcase */
import { OrderTypesProps } from '~/components/ProductType/types'
import {
  CurrencyProps,
  ProductProps,
  StatusOrderProps,
  StatusWorkflowProps,
  UnitProps,
  WalletProps,
} from './types'

const mock = [
  {
    order_id: '2d24abe2-d7aa-478b-85a3-c7d0ccad1cbc',
    price: '941.00',
    type: 'COMPRA' as OrderTypesProps,
    status: 'FULFILLED' as StatusOrderProps,
    product_code: 'Soja' as ProductProps,
    currency_code: 'BRL' as CurrencyProps,
    unit_of_measurement_code: 'sc' as UnitProps,
    commitment_amount: 196,
    initial_delivery_date: '11/07/2022',
    end_delivery_date: '12/08/2022',
    wallets: [
      {
        id: 'eed1f77a-11cf-4ed1-a20d-b6501399fb01',
        name: 'Carteira MT',
      },
      {
        id: '0e30826d-34c0-4ffc-9bbb-a8657183e0e3',
        name: 'Carteira Teste',
      },
      {
        id: 'f0c6a336-ebba-44e3-8284-beb816be8e7b',
        name: 'Carteira do Beta',
      },
      {
        id: '14c2e217-9202-4319-914a-6e7dad68fdb4',
        name: 'teste teste',
      },
      {
        id: '5b0a788a-e093-4ef6-be28-a101f06166c9',
        name: 'teste teste',
      },
    ] as WalletProps[],
    compliance_status: 'NEW' as StatusWorkflowProps,
    commercial_status: 'NEW' as StatusWorkflowProps,
    contracts_status: 'NEW' as StatusWorkflowProps,
    administrative_status: 'NEW' as StatusWorkflowProps,
    producer_name: 'ProduHomol JeanFantasia',
  },
  {
    order_id: '7ec86fe2-20b4-495f-a767-79eaf34cc272',
    price: '56.00',
    type: 'FIXACAO' as OrderTypesProps,
    status: 'FULFILLED' as StatusOrderProps,
    product_code: 'Soja' as ProductProps,
    currency_code: 'USD' as CurrencyProps,
    unit_of_measurement_code: 'sc' as UnitProps,
    commitment_amount: 196,
    initial_delivery_date: '11/02/2021',
    end_delivery_date: '21/02/2021',
    wallets: [
      {
        id: 'eed1f77a-11cf-4ed1-a20d-b6501399fb01',
        name: 'Carteira MT',
      },
    ] as WalletProps[],
    compliance_status: 'PENDING' as StatusWorkflowProps,
    commercial_status: 'PENDING' as StatusWorkflowProps,
    contracts_status: 'NEW' as StatusWorkflowProps,
    administrative_status: 'NEW' as StatusWorkflowProps,
    producer_name: 'ProduHomol JeanFantasia',
  },
  {
    order_id: '134b86e3-61f4-467b-b8d1-0b9c5bc5d2cf',
    price: '333.00',
    type: 'COMPRA' as OrderTypesProps,
    status: 'FULFILLED' as StatusOrderProps,
    product_code: 'Soja' as ProductProps,
    currency_code: 'USD' as CurrencyProps,
    unit_of_measurement_code: 'm³' as UnitProps,
    commitment_amount: 196,
    initial_delivery_date: '11/12/2023',
    end_delivery_date: '11/12/2023',
    wallets: [
      {
        id: 'eed1f77a-11cf-4ed1-a20d-b6501399fb01',
        name: 'Carteira MT',
      },
      {
        id: '5b0a788a-e093-4ef6-be28-a101f06166c9',
        name: 'teste teste',
      },
    ] as WalletProps[],
    compliance_status: 'APPROVED' as StatusWorkflowProps,
    commercial_status: 'APPROVED' as StatusWorkflowProps,
    contracts_status: 'NEW' as StatusWorkflowProps,
    administrative_status: 'NEW' as StatusWorkflowProps,
    producer_name: 'Jmcomerc Userhum',
  },
  {
    order_id: '0a173760-8016-49d1-bb89-1fa69766b245',
    price: '125.00',
    type: 'VENDA' as OrderTypesProps,
    status: 'FULFILLED' as StatusOrderProps,
    product_code: 'Soja' as ProductProps,
    currency_code: 'BRL' as CurrencyProps,
    unit_of_measurement_code: 'sc' as UnitProps,
    commitment_amount: 196,
    initial_delivery_date: '31/12/2022',
    end_delivery_date: '05/01/2023',
    wallets: [
      {
        id: '14c2e217-9202-4319-914a-6e7dad68fdb4',
        name: 'teste teste',
      },
      {
        id: '5b0a788a-e093-4ef6-be28-a101f06166c9',
        name: 'teste teste',
      },
    ] as WalletProps[],
    compliance_status: 'REJECTED' as StatusWorkflowProps,
    commercial_status: 'APPROVED' as StatusWorkflowProps,
    contracts_status: 'NEW' as StatusWorkflowProps,
    administrative_status: 'NEW' as StatusWorkflowProps,
    producer_name: 'ProduHomol JeanFantasia',
  },
]

export default mock
