// types
import { ChipProductTypeProps } from './types'

import * as Styled from './styles'

function ChipProductType({ label, productType }: ChipProductTypeProps) {
  return <Styled.Chip productType={productType} label={label} />
}

export default ChipProductType
