import { Button } from '@mui/material'

import * as Styled from './styles'

function Error({ onError }: any) {
  return (
    <Styled.Container>
      <Styled.Cancel />
      <Styled.Typography>Falha ao carregar o histórico de negociações</Styled.Typography>
      <Button variant='outlined' onClick={onError}>
        Tentar Novamente
      </Button>
    </Styled.Container>
  )
}

export default Error
