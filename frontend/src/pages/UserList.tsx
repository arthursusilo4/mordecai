import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Card,
  CardContent,
  GridLegacy as Grid,
  Chip,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from '@mui/material';
import { Search, Edit, Delete, Bookmark, BookmarkBorder } from '@mui/icons-material';
import { userAPI } from '../services/api';
import { User } from '../types/user';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [bookmarkedUsers, setBookmarkedUsers] = useState<Set<string>>(new Set());
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (search?: string) => {
    try {
      setLoading(true);
      const response = await userAPI.getAllUsers(search);
      console.log('API Response:', response.data); // Debug log
      
      // Fix: Access the data property from the response
      const usersData = response.data.data || [];
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
      setSnackbar({ open: true, message: 'Failed to fetch users', severity: 'error' });
      setUsers([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    
    // Debounce search
    setTimeout(() => {
      fetchUsers(value);
    }, 500);
  };

  const handleDeleteUser = async () => {
    if (!userToDelete) return;

    try {
      await userAPI.deleteUser(userToDelete.id);
      setUsers(users.filter(user => user.id !== userToDelete.id));
      setSnackbar({ open: true, message: 'User deleted successfully', severity: 'success' });
    } catch (error) {
      console.error('Error deleting user:', error);
      setSnackbar({ open: true, message: 'Failed to delete user', severity: 'error' });
    } finally {
      setDeleteDialogOpen(false);
      setUserToDelete(null);
    }
  };

  const toggleBookmark = (userId: string) => {
    const newBookmarks = new Set(bookmarkedUsers);
    if (newBookmarks.has(userId)) {
      newBookmarks.delete(userId);
    } else {
      newBookmarks.add(userId);
    }
    setBookmarkedUsers(newBookmarks);
  };

  const openDeleteDialog = (user: User) => {
    setUserToDelete(user);
    setDeleteDialogOpen(true);
  };

  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h4" component="h1" className="mb-6 text-gray-800 font-bold">
        User Management
      </Typography>

      {/* Search Bar */}
      <Box className="mb-6">
        <TextField
          fullWidth
          placeholder="Search users by name, email, or department..."
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            startAdornment: <Search className="mr-2 text-gray-400" />,
          }}
          variant="outlined"
        />
      </Box>

      {/* User Cards */}
      {loading ? (
        <Typography>Loading users...</Typography>
      ) : (
        <Grid container spacing={3}>
          {Array.isArray(users) && users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id} component="div">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent>
                  <Box className="flex justify-between items-start mb-3">
                    <Typography variant="h6" component="h3" className="text-gray-800">
                      {user.nama}
                    </Typography>
                    <IconButton
                      onClick={() => toggleBookmark(user.id)}
                      size="small"
                      className="text-primary-500"
                    >
                      {bookmarkedUsers.has(user.id) ? <Bookmark /> : <BookmarkBorder />}
                    </IconButton>
                  </Box>
                  
                  <Typography variant="body2" className="text-gray-600 mb-2">
                    {user.email}
                  </Typography>
                  
                  <Typography variant="body2" className="text-gray-600 mb-2">
                    Phone: {user.nomorTelepon}
                  </Typography>
                  
                  <Typography variant="body2" className="text-gray-600 mb-3">
                    Department: {user.departemen}
                  </Typography>
                  
                  <Box className="flex justify-between items-center">
                    <Chip
                      label={user.statusAktif ? 'Active' : 'Inactive'}
                      color={user.statusAktif ? 'success' : 'default'}
                      size="small"
                    />
                    
                    <Box>
                      <IconButton size="small" className="text-primary-500">
                        <Edit />
                      </IconButton>
                      <IconButton
                        size="small"
                        className="text-red-500"
                        onClick={() => openDeleteDialog(user)}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {users.length === 0 && !loading && (
        <Box className="text-center py-8">
          <Typography variant="h6" className="text-gray-500">
            No users found
          </Typography>
        </Box>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete user "{userToDelete?.nama}"? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteUser} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

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

export default UserList;