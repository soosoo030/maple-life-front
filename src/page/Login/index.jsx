import React from 'react';
import { Grid, useTheme } from '@mui/material';
import LoginForm from '../../component/LoginForm';
import { LoginImage } from '../../svg';

function Login() {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'relative',
        height: 1,
      }}
    >
      <LoginImage
        css={{
          position: 'absolute',
          left: '41.6666%',
          transform: 'translate(-85%)',
          height: '75%',
          width: 'auto',
          [theme.breakpoints.down('lg')]: {
            top: '41.6666%',
            width: '50%',
            height: 'auto',
            left: '50%',
            transform: 'translate(-50%, -85%)',
          },
          zIndex: 1,
        }}
      />
      <Grid
        item
        xs={12}
        lg={5}
        css={{
          [theme.breakpoints.down('lg')]: {
            height: '41.6666%',
          },
        }}
      />

      <Grid
        item
        xs={12}
        lg={7}
        css={{
          height: '100%',
          [theme.breakpoints.down('lg')]: {
            height: '58.3333%',
          },
        }}
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
}

export default Login;
