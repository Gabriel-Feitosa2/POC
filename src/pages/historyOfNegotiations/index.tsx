import { useEffect, useState } from 'react'

// types
import { RowProps } from './types'

// components
import DataTable from '../../components/Table'

import * as Styled from './styles'

// mocks
import columns from './columns'
import listOfRows from './mock'

const skeletonLayout = {
  columns: 8,
  rows: 6,
}

function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <Styled.Container>
      <DataTable
        autoHeight
        columns={columns}
        disableColumnMenu
        // error={true}
        onError={() => console.log('Tentando novamente')}
        getRowId={(row: RowProps) => row.order_id}
        loading={loading}
        rows={listOfRows}
        rowHeight={80}
        skeletonLayout={skeletonLayout}
      />
    </Styled.Container>
  )
}

export default Home
