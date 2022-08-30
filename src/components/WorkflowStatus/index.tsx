import {
  CheckBoxOutlineBlankOutlined,
  CheckBox,
  Warning,
  DisabledByDefault,
} from '@mui/icons-material'

// types
import { WorkflowProductTypeProps } from './types'

import * as Styled from './styles'

const renderIcons = {
  APPROVED: <CheckBox />,
  NEW: <CheckBoxOutlineBlankOutlined />,
  PENDING: <Warning />,
  REJECTED: <DisabledByDefault />,
}

function WorkflowStatus({ productType }: WorkflowProductTypeProps) {
  return (
    <Styled.WorkflowStatus productType={productType}>
      {renderIcons[productType]}
    </Styled.WorkflowStatus>
  )
}

export default WorkflowStatus
