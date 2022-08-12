import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export default function History() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar
          sx={{
            backgroundColor: 'white',
          }}
        >
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, color: 'black' }}
            fontWeight='500'
          >
            Histórico de Negociações
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant='outlined' sx={{ color: '#05183A' }}>
            <FilterAltIcon /> Filtros
          </Button>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
