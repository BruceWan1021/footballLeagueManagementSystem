import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, Box, Typography, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // 导入react-router-dom的Link组件

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email, password, rememberMe);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 400,
        padding: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 2,
        boxShadow: 3,
        margin: '0 auto', 
      }}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
        </Grid>

        <Grid item>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
        </Grid>

        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                color="primary"
              />
            }
            label="Remember Me"
            sx={{ marginBottom: 2 }}
          />
        </Grid>

        {error && (
          <Grid item>
            <Typography color="error" variant="body2" align="center">
              {error}
            </Typography>
          </Grid>
        )}

<Grid container justifyContent="space-between" sx={{ marginTop: 2 }}>
          <Grid item>
            <Link component={RouterLink} to="/register" variant="body2" sx={{ color: '#7f57e2', textDecoration: 'none' }}>
              Don't have an account? Register
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/forgot-password" variant="body2" sx={{ color: '#7f57e2', textDecoration: 'none' }}>
              Forgot Password?
            </Link>
          </Grid>
        </Grid>

        <Grid item>
          <Button type="submit" variant="contained" fullWidth sx={{ padding: '12px', backgroundColor: '#7f57e2' }}>
            Login
          </Button>
        </Grid>

        
      </Grid>
    </Box>
  );
};

export default LoginForm;
