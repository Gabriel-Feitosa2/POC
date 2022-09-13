import { ComponentStory } from '@storybook/react'
import TableDesktop from '.'
import listOfRows from '../../../pages/historyOfNegotiations/mock'
import columns from '../../../pages/historyOfNegotiations/columns'
import { RowProps } from '~/pages/historyOfNegotiations/types'

export default {
  Title: 'Table Desktop',
  component: TableDesktop,
}

const Template: ComponentStory<typeof TableDesktop> = (args) => <TableDesktop {...args} />

export const Default = Template.bind({})
Default.args = {
  columns: columns,
  rows: listOfRows,
  getRowId: (row: RowProps) => row.order_id,
  autoHeight: true,
  rowHeight: 80,
  disableColumnMenu: true,
}
