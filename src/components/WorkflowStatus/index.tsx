// types
import { WorkflowProductTypeProps } from './types'

import * as Styled from './styles'
import {
  CheckBoxOutlineBlank as CheckBoxOutlineBlankUI,
  CheckBox as CheckBoxUI,
  Warning as WarningUI,
  DisabledByDefault as DisabledByDefaultIconUI,
} from '@mui/icons-material'

function CheckboxProductType({ productType }: WorkflowProductTypeProps) {
  return (
    <Styled.Checkbox
      productType={productType}
      checkedIcon={
        productType === 'NEW' ? (
          <CheckBoxOutlineBlankUI />
        ) : productType === 'PENDING' ? (
          <WarningUI />
        ) : productType === 'REJECTED' ? (
          <DisabledByDefaultIconUI />
        ) : (
          <CheckBoxUI />
        )
      }
      disabled
      checked
    />
  )
}

export default CheckboxProductType
