import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  css,
  Grid,
  IconButton,
  Paper,
  styled,
  Typography,
} from '@mui/material';
import {
  CheckIcon,
  DeleteIcon,
  DropletIcon,
  EditIcon,
  MusicIcon,
  SunIcon,
} from '../../svg';
import _ from 'lodash';
import TaskAPI from '../../api/TaskAPI';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { asyncTasks, editTaskTarget, openTaskModal } from '../../atoms/task';

const iconCss = css({
  width: 70,
  height: 70,
});

const iconVariant = {
  sun: <SunIcon css={iconCss} />,
  droplet: <DropletIcon css={iconCss} />,
  music: <MusicIcon css={iconCss} />,
};

const actionIconCss = css({
  width: 35,
  height: 35,
});

const TitleTypography = styled(Typography)({
  color: 'white',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Task({ task_id, task_title, expected_time, status, icon, dense }) {
  const titleRef = useRef(null);
  const titleContainerRef = useRef(null);
  const [hasSpace, setHasSpace] = useState(false);

  const reloadTasks = useResetRecoilState(asyncTasks);
  const setEditableTaskTarget = useSetRecoilState(editTaskTarget);
  const setOpenTaskModal = useSetRecoilState(openTaskModal);

  useEffect(() => {
    if (titleRef.current && titleContainerRef.current) {
      const titleComputedStyle = window.getComputedStyle(titleRef.current);
      const titleDisplay = titleComputedStyle.getPropertyValue('display');

      titleRef.current.style.display = 'inline-block';
      const titleWidth = titleComputedStyle.getPropertyValue('width');
      const titleContainerWidth = window
        .getComputedStyle(titleContainerRef.current)
        .getPropertyValue('width');

      const textContained =
        parseInt(titleWidth) < parseInt(titleContainerWidth);
      setHasSpace(textContained);

      titleRef.current.style.display = titleDisplay;
    }
  }, [task_title]);

  if (dense) {
    return (
      <Paper
        sx={{
          borderRadius: 10,
          bgcolor: 'primary.main',
        }}
      >
        <TitleTypography variant="body1" align="center">
          {task_title}
        </TitleTypography>
      </Paper>
    );
  }

  const canEdit = status === 'DOING';

  return (
    <Paper
      sx={{
        borderRadius: 10,
        bgcolor: 'primary.main',
        px: hasSpace ? 3 : 5,
        py: 3,
      }}
    >
      <Grid
        container
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="stretch"
        gap={3}
      >
        <Grid item xs={canEdit ? 10 : 12}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            gap={3}
          >
            <Grid item width={0.4}>
              {iconVariant[icon]}
            </Grid>
            <Grid item>
              <Typography variant="h3" fontSize={[24, 24, 36]} color="white">
                {expected_time}H
              </Typography>
            </Grid>
            <Grid item xs={12} ref={titleContainerRef}>
              {hasSpace ? (
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                  ref={titleRef}
                >
                  {_.chain(task_title)
                    .words(/\S+/g)
                    .map((word, idx) => (
                      <TitleTypography
                        key={idx}
                        component="span"
                        fontSize={[24, 24, 36]}
                      >
                        {word}
                      </TitleTypography>
                    ))
                    .value()}
                </Box>
              ) : (
                <TitleTypography ref={titleRef} fontSize={[24, 24, 36]}>
                  {task_title}
                </TitleTypography>
              )}
            </Grid>
          </Grid>
        </Grid>
        {status === 'DOING' && (
          <Grid item xs={2} minWidth={1 / 6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
                height: 1,
              }}
            >
              <IconButton
                onClick={() => {
                  TaskAPI.completeTask(task_id).then(reloadTasks);
                }}
              >
                <CheckIcon css={actionIconCss} />
              </IconButton>
              <IconButton
                onClick={() => {
                  setEditableTaskTarget({
                    task_id,
                    task_title,
                    expected_time,
                    icon,
                  });
                  setOpenTaskModal(true);
                }}
              >
                <EditIcon css={actionIconCss} />
              </IconButton>
              <IconButton
                onClick={() => {
                  TaskAPI.deleteTask(task_id).then(reloadTasks);
                }}
              >
                <DeleteIcon css={actionIconCss} />
              </IconButton>
            </Box>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

export default Task;
