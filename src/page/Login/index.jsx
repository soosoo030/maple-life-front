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
          right: 'calc(58.3333% - 100px)',
          height: '75%',
          width: 'auto',
          [theme.breakpoints.down('lg')]: {
            bottom: 'calc(58.3333% - 100px)',
            width: '75%',
            height: 'auto',
            right: '50%',
            transform: 'translate(50%)',
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
            height: '41.66666667%',
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
