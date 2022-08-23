// components
import DataTable from './components/Table'

// mocks
import columns from './components/Table/columns'
import listOfRows from './components/Table/mock'

function Home() {
  return <DataTable columns={columns} rows={listOfRows} />
}

export default Home
