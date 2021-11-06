import Login from '../Login';
import LoginAnnounceModal from '../LoginAnnounceModal';
import * as React from 'react';
import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import { MenuIcon, NextIcon, PlusIcon, PrevIcon } from '../../svg';
import {
  animated,
  config,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from 'react-spring';
import Task from '../Task';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
  background: 'white',
});

const AnimatedAppBar = animated(AppBar);

export default function Main() {
  const [addTask, setAddTask] = useState(true);
  const [announce, setAnnounce] = useState(true);
  const [openTask, setOpenTask] = useState(false);
  const vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
  const expandedAppBarHeight = vmin * 30;

  const appbarRef = useSpringRef();
  const style = useSpring({
    from: {
      height: 76,
    },
    to: {
      height: expandedAppBarHeight,
    },
    reverse: !openTask,
    ref: appbarRef,
  });

  const sliderRef = useSpringRef();
  const sliderTransition = useTransition(openTask, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    ref: sliderRef,
    config: config.stiff,
  });

  useChain([appbarRef, sliderRef], [0, openTask ? 0.1 : 0]);

  const sliderSetting = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: (
      <NextIcon
        css={{
          '&.slick-next': {
            width: 30,
            height: 30,
            position: 'absolute',
            right: -54,
          },
        }}
      />
    ),
    prevArrow: (
      <PrevIcon
        css={{
          '&.slick-prev': {
            width: 30,
            height: 30,
            position: 'absolute',
            left: -54,
          },
        }}
      />
    ),
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <Login />
      <LoginAnnounceModal
        open={announce}
        closeModal={() => setAnnounce(false)}
      />
      {/*<AddTaskModal open={addTask} closeModal={() => setAddTask(false)} />*/}
      <AnimatedAppBar
        style={style}
        position="fixed"
        sx={{
          top: 'auto',
          bottom: 0,
          bgcolor: 'primary.light',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open tasks"
            onClick={() => {
              setOpenTask(!openTask);
            }}
          >
            <MenuIcon css={{ width: 60, height: 60 }} />
          </IconButton>
          <StyledFab
            color="white"
            aria-label="add"
            onClick={() => setAddTask((prevState) => !prevState)}
          >
            <PlusIcon
              css={(theme) => ({
                fill: theme.palette.secondary.main,
              })}
            />
          </StyledFab>
          {!openTask && (
            <Grid container spacing={3} mt={0.5}>
              <Grid item xs={4}>
                <Task
                  task_title="단풍톤 코딩"
                  expected_time={3.5}
                  status="DOING"
                  icon="droplet"
                  dense
                />
              </Grid>
              <Grid item xs={4}>
                <Task
                  task_title="단풍톤 코딩"
                  expected_time={3.5}
                  status="DOING"
                  icon="droplet"
                  dense
                />
              </Grid>
              <Grid item xs={4}>
                <Task
                  task_title="단풍톤 코딩"
                  expected_time={3.5}
                  status="DOING"
                  icon="droplet"
                  dense
                />
              </Grid>
            </Grid>
          )}
        </Toolbar>
        {sliderTransition(
          (style, open) =>
            open && (
              <animated.div
                style={style}
                css={{ display: 'flex', justifyContent: 'center' }}
              >
                <Slider
                  {...sliderSetting}
                  css={{
                    width: '90%',
                    '& .slick-slide > div': {
                      padding: '0 24px',
                    },
                    '& .slick-list': {
                      margin: '0 -24px',
                    },
                  }}
                >
                  <Task
                    task_title="단풍톤 코딩"
                    expected_time={3.5}
                    status="DOING"
                    icon="droplet"
                  />
                  <Task
                    task_title="단풍톤 코딩"
                    expected_time={3.5}
                    status="DOING"
                    icon="droplet"
                  />
                  <Task
                    task_title="단풍톤 코딩"
                    expected_time={3.5}
                    status="DOING"
                    icon="droplet"
                  />
                  <Task
                    task_title="단풍톤 코딩"
                    expected_time={3.5}
                    status="DOING"
                    icon="droplet"
                  />
                </Slider>
              </animated.div>
            )
        )}
      </AnimatedAppBar>
    </Box>
  );
}
