import { css } from 'styled-components'

// material
import { alpha, styled, Chip as ChipMUI } from '@mui/material'
import { Theme } from '@mui/material/styles'

import { ChipProductTypeProps } from './types'

type ChipProps = Pick<ChipProductTypeProps, 'productType'>

const ChipModifiers = {
  COMPRA: (theme: Theme) => css`
    background: ${alpha(theme.palette.success.dark, 0.3)};
    color: ${theme.palette.success.dark};
  `,
  VENDA: (theme: Theme) => css`
    background: ${alpha(theme.palette.warning.main, 0.3)};
    color: ${theme.palette.warning.main};
  `,
  FIXACAO: (theme: Theme) => css`
    background: ${alpha(theme.palette.primary.dark, 0.3)};
    color: ${theme.palette.primary.dark};
  `,
}

export const Chip = styled(ChipMUI)<ChipProps>`
  ${({ theme, productType }) => css`
    color: ${theme.palette.success.dark};
    background: ${theme.palette.success.contrastText};

    ${!!productType && ChipModifiers[productType](theme)}
  `}
`
