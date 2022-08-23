// components
import DataTable from './components/Table'

// mocks
import columns from './components/Table/columns.json'
import listOfRows from './components/Table/mock.json'

function Home() {
  return <DataTable colNames={columns} rows={listOfRows} />
}

export default Home
