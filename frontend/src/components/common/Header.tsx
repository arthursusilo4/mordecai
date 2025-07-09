import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Home, People, PersonAdd, Menu, Close } from '@mui/icons-material';

const Header: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { path: '/', label: 'Home', icon: <Home /> },
    { path: '/users', label: 'Users', icon: <People /> },
    { path: '/add-user', label: 'Add User', icon: <PersonAdd /> }
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        p: 2,
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
      }}>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Menu
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: isActive(item.path) ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
              color: isActive(item.path) ? 'primary.main' : 'text.primary',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.04)',
              },
            }}
          >
            <ListItemIcon sx={{ color: isActive(item.path) ? 'primary.main' : 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" className="bg-primary-500">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="text-white no-underline flex items-center">
              {/* Ledger Icon SVG */}
              <svg 
                width={isMobile ? "24" : "32"}
                height={isMobile ? "24" : "32"}
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={isMobile ? "mr-2" : "mr-3"}
              >
                <path 
                  d="M4 4H20C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5C3 4.44772 3.44772 4 4 4Z" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M8 8H16" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M8 12H16" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M8 16H12" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{
                fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
                fontWeight: '500',
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                letterSpacing: '-0.025em',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
              }}>
                Mordecai
              </span>
            </Link>
          </Typography>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: isTablet ? 1 : 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  startIcon={item.icon}
                  className={isActive(item.path) ? 'bg-primary-600' : ''}
                  sx={{
                    minWidth: isTablet ? 'auto' : undefined,
                    px: isTablet ? 1 : 2,
                    fontSize: isTablet ? '0.875rem' : '1rem',
                    '& .MuiButton-startIcon': {
                      marginRight: isTablet ? 0.5 : 1
                    }
                  }}
                >
                  {isTablet ? '' : item.label}
                  {isTablet && (
                    <Box component="span" sx={{ ml: 0.5, display: { xs: 'none', md: 'inline' } }}>
                      {item.label}
                    </Box>
                  )}
                </Button>
              ))}
            </Box>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250 
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;