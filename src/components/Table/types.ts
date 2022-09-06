import { DataGridProps } from '@mui/x-data-grid'

export type TableProps<TypeColumns, TypeRows> = {
  columns: TypeColumns[]
  loading: boolean
  SkeletonCell: React.ReactNode
  rows: TypeRows[]
} & DataGridProps

export type TableDesktopLoadingProps<TypeColumns, TypeRows> = {
  rows: TypeRows[]
  columns: TypeColumns[]
}
