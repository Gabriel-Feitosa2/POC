// types
import { ProductTypeProps } from './types'

import * as Styled from './styles'

function ProductType({ type }: ProductTypeProps) {
  return <Styled.Chip label={type} />
}

export default ProductType
