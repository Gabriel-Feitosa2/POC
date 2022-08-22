import styled, { css } from 'styled-components'
// material
import { Chip as ChipMUI } from '@mui/material'

export const Chip = styled(ChipMUI)`
  background: ${(props) => (props.label === 'COMPRA' ? 'red' : 'green')};
`
