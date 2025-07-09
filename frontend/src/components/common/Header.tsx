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
          <Link to="/" className="text-white no-underline flex items-center">
            {/* Ledger Icon SVG */}
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3"
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
              fontSize: '1.5rem',
              letterSpacing: '-0.025em',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
            }}>
              Mordecai
            </span>
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