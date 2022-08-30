import SvgIconMUI, { SvgIconProps } from '@mui/material/SvgIcon'

export function SvgIcon(props: SvgIconProps) {
  const { children } = props

  return <SvgIconMUI {...props}>{children}</SvgIconMUI>
}
