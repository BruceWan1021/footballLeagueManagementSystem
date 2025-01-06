import React, { useState } from 'react';
import LoginForm from '../components/loginForm';
import { Box, Typography, Paper } from '@mui/material';
import loginBackground from '../images/loginBackground.png';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password, rememberMe) => {
    if (email === 'test@example.com' && password === 'password123') {
      setIsLoggedIn(true);
      alert(`Logged in as ${email}`);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${loginBackground})`, 
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={6} 
        sx={{
          padding: 4, 
          maxWidth: 450, 
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          borderRadius: 3, 
        }}
      >
        {!isLoggedIn ? (
          <>
            <Typography
              variant="h3"
              align="center"
              sx={{
                marginBottom: 3,
                fontWeight: 'bold',
                color: '#00000', 
              }}
            >
              Campus Football
            </Typography>
            <LoginForm onLogin={handleLogin} />
          </>
        ) : (
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 'bold', color: '#4caf50' }}
          >
            Welcome back!
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default LoginPage;
