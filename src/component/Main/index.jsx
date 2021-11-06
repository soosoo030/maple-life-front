import Login from '../Login';
import LoginAnnounceModal from '../LoginAnnounceModal';
import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../Header';
import ExpBar from '../ExpBar';
import imgUrl from './tree1.png';

export default function Main() {
  const [announce, setAnnounce] = useState(true);

  return (
    <Box>
      <Typography
        sx={{
          textAlign: 'right',
          mr: '20px',
          mb: '20px',
        }}
      >
        <Button sx={{
          color: "secondary.main",
          fontSize: "24px",
          fontFamily: '"Slabo 27px"',
        }}>Setting</Button>
        /
        <Button sx={{
          color: "secondary.main",
          fontSize: "24px",
          fontFamily: '"Slabo 27px"',
        }}>Logout</Button>
      </Typography>
      <Grid container
        justifyContent="center"
        alignItems="center"
        direction="column"
        flexWrap="nowrap"
      >
        <Grid item>
          <Typography
            variant="h2"
            sx={{ color: 'secondary.main', mb: '20px' }}
          >김멋사
          </Typography>
        </Grid>
        <Grid item>
          <ExpBar
            ratio={0.3}
          />
          <img
            width="300px"
            src={imgUrl}
            sx={{
              zIndex: "1",
              postion: "absolute"

            }} />


        </Grid>
      </Grid>
      <Login />
      <LoginAnnounceModal
        open={announce}
        closeModal={() => setAnnounce(false)}
      />
      <Header />
    </Box>
  );
}
