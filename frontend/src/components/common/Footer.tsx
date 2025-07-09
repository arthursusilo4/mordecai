import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#1f2937',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Mordecai User Management System. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;