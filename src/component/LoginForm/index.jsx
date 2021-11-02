import React from 'react';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';

function LoginForm() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 1,
        height: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'primary.light',
      }}
    >
      <Grid
        container
        justifyContent="flex-end"
        alignContent="center"
        sx={{
          right: 0,
          width: '75%',
        }}
      >
        <Grid item xs={12} lg={8}>
          <Typography
            fontFamily="'Slabo 27px'"
            variant="h1"
            align="left"
            color="background.default"
            mb={5}
          >
            LOGIN
          </Typography>
        </Grid>
        <Grid item xs={12} lg={8}>
          <TextField
            variant="standard"
            label={
              <Typography fontFamily="'Slabo 27px'" color="primary.dark">
                Id
              </Typography>
            }
            margin="normal"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: <i data-eva="person" />,
            }}
            inputProps={{
              style: {
                fontFamily: '"Slabo 27px"',
                color: 'white',
              },
            }}
            sx={{
              width: '75%',
            }}
          />
        </Grid>
        <Grid item xs={12} lg={8}>
          <TextField
            variant="standard"
            type="password"
            label={
              <Typography fontFamily="'Slabo 27px'" color="primary.dark">
                Password
              </Typography>
            }
            margin="normal"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: <i data-eva="lock" />,
            }}
            inputProps={{
              style: {
                fontFamily: '"Slabo 27px"',
                color: 'white',
              },
            }}
            sx={{
              width: '75%',
            }}
          />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography
            align="right"
            fontFamily="'Slabo 27px'"
            color="background.default"
            width="75%"
          >
            Create Account
          </Typography>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Button
            variant="contained"
            disableElevation
            fullWidth
            sx={{
              backgroundColor: 'primary.dark',
              height: 66,
              borderRadius: '33px',
              width: '75%',
              position: 'relative',
              top: '10vmin',
              fontSize: 24,
              fontFamily: '"Slabo 27px"',
            }}
          >
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;
