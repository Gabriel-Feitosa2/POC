import { DataGridProps } from '@mui/x-data-grid'

export type TableProps<TypeColumns, TypeRows> = {
  columns: TypeColumns[]
  rows: TypeRows[]
} & DataGridProps
