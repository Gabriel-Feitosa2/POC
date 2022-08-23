// components
import DataTable from './components/Table'

import * as Styled from './styles'

// mocks
import columns from './components/Table/columns'
import listOfRows from './components/Table/mock'

function Home() {
  return (
    <Styled.Container>
      <DataTable columns={columns} rows={listOfRows} />
    </Styled.Container>
  )
}

export default Home
