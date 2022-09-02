// types
import { RowProps } from './types'

// components
import DataTable from '../../components/Table'

import * as Styled from './styles'

// mocks
import columns from './columns'
import listOfRows from './mock'

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
