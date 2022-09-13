import { DataGridProps } from '@mui/x-data-grid'

export type SkeletonTableProps = {
  columns: number
  rows: number
}

export type TableProps<TypeColumns, TypeRows, TypeSkeleton> = {
  columns: TypeColumns[]
  loading: boolean
  // SkeletonCell: React.ReactNode
  rows: TypeRows[]
  skeletonLayout: TypeSkeleton
} & DataGridProps

export type LoadingOrErrorTypes = {
  error: boolean
  loading: any
  onError: any
}

// export type TableDesktopLoadingProps<TypeColumns, TypeRows> = {
//   rows: TypeRows[]
//   columns: TypeColumns[]
// }
