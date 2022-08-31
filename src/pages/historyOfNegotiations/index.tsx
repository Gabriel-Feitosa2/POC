// types
import { RowProps, LayoutProps } from './components/Table/types'

// components
import DataTable from './components/Table'

import * as Styled from './styles'

// mocks
import columns from './components/Table/columns'
import listOfRows from './components/Table/mock'

function Home() {
  const layout = {
    autoHeight: true,
    disableColumnMenu: true,
    getRowId: (row: RowProps) => row.order_id,
    rowHeight: 120,
  } as LayoutProps

  return (
    <Styled.Container>
      <DataTable columns={columns} rows={listOfRows} layout={layout} />
    </Styled.Container>
  )
}

export default Home

// colocar tipo generico
