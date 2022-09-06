// types
import { RowProps } from './types'

// components
import DataTable from '../../components/Table'

// import TableSkeleton
import TableDesktopLoading from '../../components/Table/TableDesktopLoading/TableDesktopLoading'

import * as Styled from './styles'

// mocks
import columns from './columns'
import listOfRows from './mock'
import { useEffect, useState } from 'react'

function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <Styled.Container>
      <DataTable
        columns={columns}
        rows={listOfRows}
        loading={loading}
        autoHeight
        disableColumnMenu
        getRowId={(row: RowProps) => row.order_id}
        rowHeight={80}
        SkeletonCell={<TableDesktopLoading columns={columns} rows={listOfRows} />}
      />
    </Styled.Container>
  )
}

export default Home
