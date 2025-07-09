import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import UserList from './pages/UserList';
import AddUser from './pages/AddUser';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#22a80a'
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/add-user" element={<AddUser />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;