import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Alert,
  Snackbar,
} from '@mui/material';
import { Save, Clear } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { userAPI } from '../services/api';
import { CreateUserRequest } from '../types/user';

const AddUser: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CreateUserRequest>({
    nama: '',
    email: '',
    nomorTelepon: '',
    statusAktif: true,
    departemen: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  const departments = [
    'Human Resources',
    'Information Technology',
    'Finance',
    'Marketing',
    'Operations',
    'Sales',
    'Customer Service',
    'Research & Development',
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nama.trim()) {
      newErrors.nama = 'Name is required';
    } else if (formData.nama.trim().length < 2) {
      newErrors.nama = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.nomorTelepon.trim()) {
      newErrors.nomorTelepon = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.nomorTelepon)) {
      newErrors.nomorTelepon = 'Phone number must be at least 10 digits';
    }

    if (!formData.departemen.trim()) {
      newErrors.departemen = 'Department is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof CreateUserRequest, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      await userAPI.createUser(formData);
      setSnackbar({ open: true, message: 'User created successfully!', severity: 'success' });
      
      // Reset form
      setFormData({
        nama: '',
        email: '',
        nomorTelepon: '',
        statusAktif: true,
        departemen: '',
      });
      
      // Navigate to user list after short delay
      setTimeout(() => {
        navigate('/users');
      }, 1500);
    } catch (error: any) {
      console.error('Error creating user:', error);
      const errorMessage = error.response?.data?.message || 'Failed to create user';
      setSnackbar({ open: true, message: errorMessage, severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      nama: '',
      email: '',
      nomorTelepon: '',
      statusAktif: true,
      departemen: '',
    });
    setErrors({});
  };

  return (
    <Container maxWidth="md" className="py-8">
      <Typography variant="h4" component="h1" className="mb-6 text-gray-800 font-bold">
        Add New User
      </Typography>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <TextField
                fullWidth
                label="Full Name"
                value={formData.nama}
                onChange={(e) => handleInputChange('nama', e.target.value)}
                error={!!errors.nama}
                helperText={errors.nama}
                required
                variant="outlined"
              />

              {/* Email Field */}
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                required
                variant="outlined"
              />

              {/* Phone Number Field */}
              <TextField
                fullWidth
                label="Phone Number"
                value={formData.nomorTelepon}
                onChange={(e) => handleInputChange('nomorTelepon', e.target.value)}
                error={!!errors.nomorTelepon}
                helperText={errors.nomorTelepon}
                required
                variant="outlined"
                placeholder="Enter phone number (minimum 10 digits)"
              />

              {/* Department Field */}
              <FormControl fullWidth error={!!errors.departemen} required>
                <InputLabel>Department</InputLabel>
                <Select
                  value={formData.departemen}
                  onChange={(e) => handleInputChange('departemen', e.target.value)}
                  label="Department"
                >
                  {departments.map((dept) => (
                    <MenuItem key={dept} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </Select>
                {errors.departemen && (
                  <Typography variant="caption" color="error" className="mt-1">
                    {errors.departemen}
                  </Typography>
                )}
              </FormControl>
            </Box>

            {/* Status Switch */}
            <Box className="mt-6">
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.statusAktif}
                    onChange={(e) => handleInputChange('statusAktif', e.target.checked)}
                    color="primary"
                  />
                }
                label="Active Status"
              />
            </Box>

            {/* Action Buttons */}
            <Box className="flex gap-4 mt-8">
              <Button
                type="submit"
                variant="contained"
                startIcon={<Save />}
                disabled={loading}
                className="bg-primary-500 hover:bg-primary-600"
              >
                {loading ? 'Creating...' : 'Create User'}
              </Button>
              
              <Button
                type="button"
                variant="outlined"
                startIcon={<Clear />}
                onClick={handleReset}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Reset Form
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddUser;