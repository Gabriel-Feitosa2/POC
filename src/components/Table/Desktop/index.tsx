// material
import { DataGrid } from '@mui/x-data-grid'

// components
import Skeleton from './Skeleton/Skeleton'
import Error from './Error/Error'

// types
import { TableProps, LoadingOrErrorTypes } from '../types'

// style
import * as Styled from './styles'

const LoadingOrError = ({ error, loading, onError }: LoadingOrErrorTypes) => {
  if (error) return <Error onError={onError} />

  return loading && !error && <Skeleton />
}

function TableDesktop<TypeColumns, TypeRows, TypeSkeleton>(
  props: TableProps<TypeColumns, TypeRows, TypeSkeleton>,
) {
  const { error, loading, onError } = props

  return (
    <Styled.TableContainer>
      {loading ? (
        <LoadingOrError error={error} loading={loading} onError={onError} />
      ) : (
        <DataGrid {...props} />
      )}
    </Styled.TableContainer>
  )
}

export default TableDesktop
