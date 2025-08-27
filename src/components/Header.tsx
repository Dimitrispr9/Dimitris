import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Tooltip,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <RestaurantIcon sx={{ color: 'primary.main', fontSize: 32, mr: 1 }} />
            <Typography
              variant="h4"
              component="h1"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '-0.5px',
              }}
            >
              Da-pizza
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              color="inherit"
              onClick={() => navigate('/')}
              sx={{
                color: isDarkMode ? 'primary.main' : (location.pathname === '/' ? 'primary.main' : 'text.secondary'),
                fontWeight: location.pathname === '/' ? 700 : 400,
                '&:hover': {
                  backgroundColor: 'rgba(255, 107, 107, 0.1)',
                },
              }}
            >
              Menu
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/admin')}
              sx={{
                color: isDarkMode ? 'primary.main' : (location.pathname === '/admin' ? 'primary.main' : 'text.secondary'),
                fontWeight: location.pathname === '/admin' ? 700 : 400,
                '&:hover': {
                  backgroundColor: 'rgba(255, 107, 107, 0.1)',
                },
              }}
            >
              Admin
            </Button>
            <Tooltip title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: isDarkMode ? 'primary.main' : 'text.secondary',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                  },
                }}
              >
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
