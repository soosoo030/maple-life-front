import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { MenuIcon, NextIcon, PlusIcon, PrevIcon } from '../../svg';
import { Grid, Fab, AppBar, styled, Skeleton } from '@mui/material';
import Task from '../Task';
import {
  animated,
  config,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from 'react-spring';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  useRecoilState,
  useRecoilStateLoadable,
  useResetRecoilState,
} from 'recoil';
import { asyncTasks, openTaskModal } from '../../atoms/task';
import _ from 'lodash';
import AddTaskModal from '../AddTaskModal';

import TaskButton from '../TaskButton';

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

export default function Header() {
  const [addTask, setAddTask] = useRecoilState(openTaskModal);

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

  const [tasksLoadable, setTasks] = useRecoilStateLoadable(asyncTasks);
  const reloadTasks = useResetRecoilState(asyncTasks);
  const tasks = tasksLoadable.contents?.data?.tasks;

  return (
    <AnimatedAppBar
      style={style}
      position="fixed"
      sx={{
        top: 'auto',
        bottom: 0,
        bgcolor: 'primary.light',
      }}
    >
      <AddTaskModal open={addTask} closeModal={() => setAddTask(false)} />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open tasks"
          onClick={() => {
            setOpenTask(!openTask);
          }}
          sx={{
            position: 'absolute',
            left: 8,
            top: 4,
          }}
        >
          <MenuIcon
            css={(theme) => ({
              width: 60,
              height: 60,
              fill: theme.palette.secondary.main,
            })}
          />
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
        {!openTask &&
          (tasksLoadable.state === 'loading' ? (
            <Grid
              container
              spacing={3}
              mt={0.5}
              width="90%"
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, 0)',
              }}
            >
              <Grid item xs={4}>
                <Skeleton variant="rect" width="100%" height={20} />
              </Grid>
              <Grid item xs={4}>
                <Skeleton variant="rect" width="100%" height={20} />
              </Grid>
              <Grid item xs={4}>
                <Skeleton variant="rect" width="100%" height={20} />
              </Grid>
            </Grid>
          ) : tasksLoadable.state === 'hasValue' ? (
            <Grid
              container
              spacing={3}
              mt={0.5}
              width="90%"
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, 0)',
              }}
            >
              {_.map(_.take(tasks, 3), (task) => (
                <Grid item xs={4} key={task.task_id}>
                  <Task key={task.task_id} {...task} dense />
                </Grid>
              ))}
            </Grid>
          ) : null)}
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
                {tasksLoadable.state === 'loading' ? (
                  <>
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                  </>
                ) : tasksLoadable.state === 'hasValue' ? (
                  _.map(tasks, (task) => <Task key={task.task_id} {...task} />)
                ) : null}
              </Slider>
            </animated.div>
          )
      )}
    </AnimatedAppBar>
  );
}
