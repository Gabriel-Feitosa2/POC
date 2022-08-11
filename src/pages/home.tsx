import { Skeleton } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import Filters from '../components/filters'
import Header from '../components/header'
import History from '../components/history'
import TableEmpty from '../components/tableEmpty'

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      <Header />
      <Box>
        {loading ? (
          <Box sx={{ display: 'flex' }}>
            <Skeleton
              variant='rectangular'
              width='80%'
              height={48}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
            <Skeleton
              variant='rectangular'
              width='20%'
              height={48}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
          </Box>
        ) : (
          <History />
        )}
      </Box>
      <Box>
        {loading ? (
          <Box sx={{ display: 'flex' }}>
            <Skeleton
              variant='rectangular'
              width='10%'
              height={48}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
            <Skeleton
              variant='rectangular'
              width='20%'
              height={48}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
            <Skeleton
              variant='rectangular'
              width='30%'
              height={48}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
            <Skeleton
              variant='rectangular'
              width='20%'
              height={48}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
            <Skeleton
              variant='rectangular'
              width='10%'
              height={48}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
            <Skeleton
              variant='rectangular'
              width='30%'
              height={48}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
          </Box>
        ) : (
          <Filters />
        )}
      </Box>
      <Box>
        {loading ? (
          <Box sx={{ display: 'flex', padding: '24px' }}>
            <Skeleton
              variant='rectangular'
              width='15%'
              height={32}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
            <Skeleton
              variant='rectangular'
              width='15%'
              height={32}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
            <Skeleton
              variant='rectangular'
              width='20%'
              height={32}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
            <Skeleton
              variant='rectangular'
              width='15%'
              height={32}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
            <Skeleton
              variant='rectangular'
              width='20%'
              height={32}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
            <Skeleton
              variant='rectangular'
              width='20%'
              height={32}
              sx={{ margin: '15px', borderRadius: '4px' }}
            />
          </Box>
        ) : (
          <TableEmpty />
        )}
      </Box>
    </div>
  )
}

export default Home
