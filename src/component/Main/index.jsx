import Login from '../Login';
import LoginAnnounceModal from '../LoginAnnounceModal';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Typography, Grid, Skeleton } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../Header';
import ExpBar from '../ExpBar';
import tree1 from './tree1.png';
import tree2 from './tree2.png';
import tree3 from './tree3.png';
import UserAPI from '../../api/UserAPI';

const treeImages = [tree1, tree2, tree3];

export default function Main() {
  const token = localStorage.getItem('token');
  const [announce, setAnnounce] = useState(!token);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!!token) {
      UserAPI.me().then((res) => {
        setUser(res.data);
      });
    }
  }, [token]);

  let treeLevel = 1;
  if (user) {
    if (user.data.accumulated_task_time / 10 >= 30) {
      treeLevel = 2;
    } else if (user.data.accumulated_task_time / 10 >= 100) {
      treeLevel = 3;
    }
  }

  return (
    <Box>
      <Typography
        sx={{
          textAlign: 'right',
          mr: '20px',
          mb: '20px',
        }}
      >
        <Button
          sx={{
            color: 'secondary.main',
            fontSize: '24px',
            fontFamily: '"Slabo 27px"',
          }}
        >
          Setting
        </Button>
        /
        <Button
          sx={{
            color: 'secondary.main',
            fontSize: '24px',
            fontFamily: '"Slabo 27px"',
          }}
          onClick={() => {
            if (!!token) {
              localStorage.removeItem('token');
              setUser(null);
            }
            setAnnounce(true);
          }}
        >
          {!!token ? 'Logout' : 'Login'}
        </Button>
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        flexWrap="nowrap"
      >
        <Grid item>
          <Typography variant="h2" sx={{ color: 'secondary.main', mb: '20px' }}>
            {user === null ? (
              <Skeleton width={200} height="100%" />
            ) : (
              user.data.username
            )}
          </Typography>
        </Grid>
        <Grid item position="relative">
          <ExpBar ratio={(user?.data?.accumulated_task_time % 10) / 100} />
          <Typography
            variant="h3"
            sx={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              transform: 'translate(-50%)',
              color: 'secondary.main',
              fontFamily: '"Slabo 27px"',
            }}
          >
            {user === null ? (
              <Skeleton width={50} height="100%" />
            ) : (
              `Lv.${Math.floor(user.data.accumulated_task_time / 10) + 1}`
            )}
          </Typography>
          <img
            src={treeImages[treeLevel - 1]}
            alt="maple tree"
            css={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              height: '35vmin',
              width: 'auto',
            }}
          />
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
