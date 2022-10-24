import GoogleIcon from '@mui/icons-material/Google';
import { Alert, Box, Button, Snackbar } from '@mui/material';
import axios, { AxiosError } from 'axios';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import auth from '../../Shared/Services/Firebase';
import { saveToken } from '../../Shared/Utils/Auth';

function Login() {
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (result) => {
        const token = await result.user.getIdToken();

        try {
          await axios.get(`${import.meta.env.VITE_BASE_URL}user/verify`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

          saveToken(token);
          navigate('/home');
        } catch (error) {
          const err = error as AxiosError;
          setOpen(true);
          if (err.response?.status === 404) {
            setAlertMessage('Usuário não cadastrado');
          } else {
            setAlertMessage('Aconteceu um erro, tente novamente mais tarde');
          }
        }
      })
      .catch((error) => {
        setOpen(true);
        setAlertMessage('Aconteceu um erro, tente novamente mais tarde');
      });
  };

  const handleClose = () => {
    setOpen(false);
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

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Login;
