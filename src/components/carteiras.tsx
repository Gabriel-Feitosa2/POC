import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Box } from '@mui/system'

function Carteiras() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <AppBar position='static'>
        <Toolbar
          sx={{
            color: 'black',
            backgroundColor: 'white',
          }}
        >
          <Typography variant='h1' fontSize='16px' fontWeight='400'>
            Carteiras:
          </Typography>
          <Button>
            {' '}
            <FilterAltIcon /> Filtrar{' '}
          </Button>
          <Typography fontSize='14px' color='#9E9E9E'>
            Nenhuma Carteira selecionada
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Carteiras
