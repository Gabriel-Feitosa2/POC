// libraries/frameworks
import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacing(3)};
  `}
`
