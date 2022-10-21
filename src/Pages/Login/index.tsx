import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import auth from '../../Shared/Services/Firebase';
import { saveToken } from '../../Shared/Utils/Auth';

function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        saveToken(JSON.stringify(result.user.toJSON()));
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        onClick={handleGoogleSignIn}
      >
        Entrar com Google
      </Button>
    </Box>
  );
}

export default Login;
