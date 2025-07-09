import React from 'react';
import { Container, Typography, Box, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { People, PersonAdd, Dashboard } from '@mui/icons-material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      {/* Hero Section */}
      <Box className="text-center mb-12">
        <Typography variant="h2" component="h1" className="mb-4 text-gray-800 font-bold">
          Welcome to Mordecai
        </Typography>
        <Typography variant="h5" component="h2" className="mb-6 text-gray-600">
          Efficient User Management System
        </Typography>
        <Typography variant="body1" className="mb-8 text-gray-600 max-w-3xl mx-auto">
          Mordecai is a comprehensive user management application that allows you to efficiently 
          manage user data with features like user registration, profile management, search functionality, 
          and more. Built with modern web technologies for optimal performance and user experience.
        </Typography>
        <Box className="flex gap-4 justify-center">
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/users"
            startIcon={<People />}
            className="bg-primary-500 hover:bg-primary-600"
          >
            View Users
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/add-user"
            startIcon={<PersonAdd />}
            className="border-primary-500 text-primary-500 hover:bg-primary-50"
          >
            Add New User
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="text-center p-6">
            <Dashboard className="text-primary-500 mb-4" sx={{ fontSize: 48 }} />
            <Typography variant="h6" component="h3" className="mb-2">
              Dashboard Overview
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Get a comprehensive overview of all users in your system with real-time statistics.
            </Typography>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="text-center p-6">
            <People className="text-primary-500 mb-4" sx={{ fontSize: 48 }} />
            <Typography variant="h6" component="h3" className="mb-2">
              User Management
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Efficiently manage user profiles with full CRUD operations and advanced search capabilities.
            </Typography>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="text-center p-6">
            <PersonAdd className="text-primary-500 mb-4" sx={{ fontSize: 48 }} />
            <Typography variant="h6" component="h3" className="mb-2">
              Easy Registration
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Simple and intuitive user registration form with validation and error handling.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* About Section */}
      <Box className="mt-12 bg-white rounded-lg shadow-md p-8">
        <Typography variant="h4" component="h2" className="mb-6 text-center text-gray-800">
          About Mordecai
        </Typography>
        <Typography variant="body1" className="text-gray-600 leading-relaxed">
          Mordecai is designed to streamline user management processes for organizations of all sizes. 
          With its modern interface and robust backend, it provides a reliable solution for managing 
          user data, tracking user status, and maintaining departmental organization. The application 
          features responsive design that works seamlessly across desktop, tablet, and mobile devices.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;