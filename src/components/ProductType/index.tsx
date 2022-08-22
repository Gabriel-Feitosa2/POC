// types
import { ProductTypeProps } from './ProductType.types'

import * as Styled from './ProductType.styles'

function ProductType({ type }: ProductTypeProps) {
  return <Styled.Chip label={type} />
}

export default ProductType
