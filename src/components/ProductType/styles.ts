import { css } from 'styled-components'
// material
import { styled, Chip as ChipMUI } from '@mui/material'

export const Chip = styled(ChipMUI)`
  ${({ theme }) => css`
    color: ${theme.palette.success.dark};
    background: ${theme.palette.success.contrastText};
  `}
`
