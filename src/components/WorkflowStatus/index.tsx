import { CheckBoxOutlineBlank, CheckBox, Warning, DisabledByDefault } from '@mui/icons-material'
import SvgIconMUI, { SvgIconProps } from '@mui/material/SvgIcon'

// types
import { WorkflowProductTypeProps } from './types'

import * as Styled from './styles'

const renderIcons = {
  APPROVED: <CheckBox />,
  NEW: <CheckBoxOutlineBlank />,
  PENDING: <Warning />,
  REJECTED: <DisabledByDefault />,
}

export function SvgIcon(props: SvgIconProps) {
  return <SvgIconMUI {...props}>{props.children}</SvgIconMUI>
}

function WorkflowStatus({ productType }: WorkflowProductTypeProps) {
  return (
    <Styled.WorkflowStatus productType={productType}>
      <SvgIcon>{renderIcons[productType]}</SvgIcon>
    </Styled.WorkflowStatus>
  )
}

export default WorkflowStatus
