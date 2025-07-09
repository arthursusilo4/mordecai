import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Home, People, PersonAdd } from '@mui/icons-material';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="static" className="bg-primary-500">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" className="text-white no-underline font-bold">
            Mordecai
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            startIcon={<Home />}
            className={isActive('/') ? 'bg-primary-600' : ''}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/users"
            startIcon={<People />}
            className={isActive('/users') ? 'bg-primary-600' : ''}
          >
            Users
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/add-user"
            startIcon={<PersonAdd />}
            className={isActive('/add-user') ? 'bg-primary-600' : ''}
          >
            Add User
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;