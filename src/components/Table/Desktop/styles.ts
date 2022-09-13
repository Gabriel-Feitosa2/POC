// libraries/frameworks
import styled, { css } from 'styled-components'

// material
import { Paper, Table as TableMUI, TableContainer as TableContainerMUI } from '@mui/material'

export const Table = styled(TableMUI)``

export const TableContainer = styled(TableContainerMUI).attrs(() => ({
  component: Paper,
}))`
  padding: '2rem';
`
