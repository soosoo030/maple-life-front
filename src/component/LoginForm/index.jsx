import React from 'react';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { LockIcon, PersonIcon } from '../../svg';

function LoginForm() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 1,
        height: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.light',
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        direction="column"
        flexWrap="nowrap"
        sx={{
          right: 0,
          width: 0.4,
          height: 0.5,
          maxWidth: 400,
        }}
      >
        <Grid item>
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
        <Grid item>
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
              startAdornment: <PersonIcon css={{ width: 22 }} />,
            }}
            inputProps={{
              style: {
                fontFamily: '"Slabo 27px"',
                color: 'white',
              },
            }}
            sx={{
              width: 1,
            }}
          />
        </Grid>
        <Grid item>
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
              startAdornment: <LockIcon css={{ width: 22 }} />,
            }}
            inputProps={{
              style: {
                fontFamily: '"Slabo 27px"',
                color: 'white',
              },
            }}
            sx={{
              width: 1,
            }}
          />
        </Grid>
        <Grid item position="relative">
          <Typography
            variant="button"
            sx={{
              fontFamily: '"Slabo 27px"',
              color: 'background.default',
              cursor: 'pointer',
              ml: 'auto',
              position: 'absolute',
              right: 0,
            }}
          >
            Create Account
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            disableElevation
            fullWidth
            sx={{
              backgroundColor: 'primary.dark',
              height: 66,
              borderRadius: '33px',
              width: 1,
              mt: '10vmin',
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
