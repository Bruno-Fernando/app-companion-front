import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ParsedToken } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { getDecodedToken } from '../../Shared/Utils/Auth';

function Home() {
  const navigate = useNavigate();

  const decodedToken: ParsedToken | null = getDecodedToken();

  if (!decodedToken) {
    navigate('/login');
  } else {
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
        <Avatar src={decodedToken.picture} />
        <Typography>{decodedToken.name}</Typography>
      </Box>
    );
  }
}

export default Home;
