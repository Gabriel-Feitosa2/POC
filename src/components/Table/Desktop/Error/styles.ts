import styled, { css } from 'styled-components'
import { Typography as TypographyMUI } from '@mui/material'
import { Cancel as CancelMUI } from '@mui/icons-material'

export const Container = styled.section`
  text-align: center;
`
export const Cancel = styled(CancelMUI)`
  width: 40px;
  height: 40px;
  margin-bottom: 30px;
`

export const Typography = styled(TypographyMUI)`
  ${({ theme }) => css`
    color: ${theme.palette.error.dark};
    margin-bottom: 30px;
  `}
`
