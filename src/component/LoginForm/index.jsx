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
        justifyContent="space-around"
        alignItems="stretch"
        direction="column"
        flexWrap="nowrap"
        px={2}
        py={4}
        sx={{
          right: 0,
          width: 0.4,
          height: 0.4,
          maxWidth: 400,
          minWidth: 230,
        }}
      >
        <Grid item>
          <Typography
            fontFamily="'Slabo 27px'"
            variant="h1"
            align="left"
            color="background.default"
            fontSize={[36, 36, 54]}
            mb={[1, 1, 3]}
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
            margin="dense"
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
            margin="dense"
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
              height: 42,
              borderRadius: '21px',
              width: 1,
              mt: 6,
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
