import Login from '../Login';
import LoginAnnounceModal from '../LoginAnnounceModal';
import * as React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../Header';

export default function Main() {
  const [announce, setAnnounce] = useState(true);

  return (
    <Box>
      <Login />
      <LoginAnnounceModal
        open={announce}
        closeModal={() => setAnnounce(false)}
      />
      {/*<AddTaskModal open={addTask} closeModal={() => setAddTask(false)} />*/}
      <Header />
    </Box>
  );
}
