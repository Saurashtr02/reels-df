import  React,{useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import insta from '../assets/instalogo.png'
import Image from 'next/image'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import { AuthContext } from '@/context/auth';
import Router,{useRouter} from 'next/router'
import Link from 'next/link';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile',  'Logout'];

function ResponsiveAppBar() {

  const {logout} = useContext(AuthContext)
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = async()=>{
    await logout();
    router.push('/login')
  }

  return (
    <AppBar className="Navbar" sx={{backgroundColor:"white"}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Image src={insta} height={55} width={200}></Image>
          </Typography>

         
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }} className="nav-icons-container">
            <div className='icons'>
            <HomeIcon className="nav-icons" fontSize="large" ></HomeIcon>
            <ExploreIcon className="nav-icons" fontSize="large" ></ExploreIcon>
            </div>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{margin:"0.5rem"}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Link href='/Profile'>
                  <Typography textAlign="center">Profile</Typography>
                  </Link>
                </MenuItem>
                <MenuItem  onClick={()=>{
                  handleLogOut()
                  handleCloseUserMenu}}>
                  <Typography textAlign="center">Log out</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;