import {
  styled,
} from '@mui/material'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Link from 'next/link'
import Profile from './Profile'
import { IconBellRinging, IconMenu } from '@tabler/icons-react'
import { MouseEvent } from 'react'

interface ItemType {
  toggleMobileSidebar: (event: MouseEvent<HTMLElement>) => void
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'revert',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    borderBottom: '1px solid #e5eaef',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px'
    }
  }))
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary
  }))

  return (
    <AppBarStyled position='sticky' color='default'>
      <ToolbarStyled>
        <IconButton
          color='inherit'
          aria-label='menu'
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: 'none',
              xs: 'inline'
            }
          }}
        >
          <IconMenu width='20' height='20' />
        </IconButton>

        <IconButton
          size='large'
          aria-label='show 11 new notifications'
          color='inherit'
          aria-controls='msgs-menu'
          aria-haspopup='true'
        >
          <Badge variant='dot' color='primary'>
            <IconBellRinging size='21' stroke='1.5' />
          </Badge>
        </IconButton>
        <Box flexGrow={1} />
        <Stack spacing={1} direction='row' alignItems='center'>
          {/* <Button
            variant='contained'
            component={Link}
            href='/authentication/login'
            disableElevation
            color='primary'
          >
            Login
          </Button> */}
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  )
}

export default Header
