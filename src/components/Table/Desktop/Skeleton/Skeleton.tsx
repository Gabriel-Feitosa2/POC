// import { TableDesktopLoadingProps } from '../../types'

import * as Styled from './styles'

// import { SkeletonTableProps, TableProps } from '../../types'

// skeletonLayout: SkeletonTableProps

const Row = () => (
  <Styled.TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
    <Styled.TableCell>
      <Styled.Skeleton />
    </Styled.TableCell>
    <Styled.TableCell>
      <Styled.Skeleton />
    </Styled.TableCell>
    <Styled.TableCell>
      <Styled.Skeleton />
    </Styled.TableCell>
    <Styled.TableCell>
      <Styled.Skeleton />
    </Styled.TableCell>
    <Styled.TableCell>
      <Styled.Skeleton />
    </Styled.TableCell>
    <Styled.TableCell>
      <Styled.Skeleton />
    </Styled.TableCell>
  </Styled.TableRow>
)

const Skeleton = () => {
  return (
    <Styled.Table>
      <Styled.TableBody>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </Styled.TableBody>
    </Styled.Table>
  )
}

export default Skeleton
