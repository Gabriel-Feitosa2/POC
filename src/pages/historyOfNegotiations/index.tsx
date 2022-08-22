// components
import DataTable from './components/Table'
// mocks
import columns from './components/Table/columns.json'
import listOfRows from './components/Table/mock.json'

import { Resposive } from './style'

function Home() {
  return (
    <Resposive>
      <DataTable colNames={columns} rows={listOfRows} />
    </Resposive>
  )
}

export default Home
