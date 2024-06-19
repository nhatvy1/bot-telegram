import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import { IconSearch } from '@tabler/icons-react'
import Box from '@mui/material/Box'

const Search = () => {
  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 400,
        p: '2px 4px',
        border: '1px solid lightgray',
        borderRadius: '8px'
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search by email or fullname'
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <IconSearch />
      </IconButton>
    </Box>
  )
}

export default Search
