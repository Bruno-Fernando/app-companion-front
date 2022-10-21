import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { getDecodedToken } from '../../Shared/Utils/Auth';

function Home() {
  const navigate = useNavigate();

  const decodedToken: User = getDecodedToken();

  if (!decodedToken) {
    navigate('/login');
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Avatar src={decodedToken.photoURL || ''} />
      <Typography>{decodedToken.displayName}</Typography>
    </Box>
  );
}

export default Home;
