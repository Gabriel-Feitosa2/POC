import { css } from 'styled-components'

// material
import { styled, Checkbox as CheckboxUI } from '@mui/material'
import { Theme } from '@mui/material/styles'

import { SvgIcon } from '.'

import { WorkflowProductTypeProps } from './types'

type WorkflowStatusProps = Pick<WorkflowProductTypeProps, 'productType'>

const WorkflowModifiers = {
  NEW: (theme: Theme) => css``,
  PENDING: (theme: Theme) => css`
    color: ${theme.palette.warning.main};
  `,
  APPROVED: (theme: Theme) => css`
    color: ${theme.palette.success.light};
  `,
  REJECTED: (theme: Theme) => css`
    color: ${theme.palette.error.light};
  `,
}

export const WorkflowStatus = styled(SvgIcon)<WorkflowStatusProps>`
  ${({ theme, productType }) => css`
    color: ${theme.palette.text.primary};

    ${!!productType && WorkflowModifiers[productType](theme)}
  `}
`
