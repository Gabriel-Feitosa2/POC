// types
import { RowProps } from './components/Table/types'

// components
import DataTable from './components/Table'

import * as Styled from './styles'

// mocks
import columns from './components/Table/columns'
import listOfRows from './components/Table/mock'

function Home() {
  return (
    <Styled.Container>
      <DataTable
        columns={columns}
        rows={listOfRows}
        autoHeight
        disableColumnMenu
        getRowId={(row: RowProps) => row.order_id}
        rowHeight={80}
      />
    </Styled.Container>
  )
}

export default Home
