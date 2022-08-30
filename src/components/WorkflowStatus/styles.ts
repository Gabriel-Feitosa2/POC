import { css } from 'styled-components'

// material
import { alpha, styled, Checkbox as CheckboxUI} from '@mui/material'
import { Theme } from '@mui/material/styles'

import { WorkflowProductTypeProps } from './types'

type WorkflowProps = Pick<WorkflowProductTypeProps, 'productType'>

const WorkflowModifiers = {
  NEW: (theme: Theme) => css`
  `,
  PENDING: (theme: Theme) => css`
    color: ${theme.palette.warning.main};
    &.Mui-disabled {
        color: #f9a825;
    }
  `,
  APPROVED: (theme: Theme) => css`
    color: ${theme.palette.primary.dark};
    &.Mui-disabled {
        color: #1B5E20;
    }
  `,
  REJECTED: (theme: Theme) => css`
    color: ${theme.palette.primary.dark};
    &.Mui-disabled {
        color: #b71c1c;
    }
  `,
}

export const Checkbox = styled(CheckboxUI)<WorkflowProps>`
  ${({ theme, productType }) => css`
    color: ${theme.palette.success.dark};
    background: ${theme.palette.success.contrastText};

    ${!!productType && WorkflowModifiers[productType](theme)}
  `}
`
