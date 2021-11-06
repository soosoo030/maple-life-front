import React, { useState } from 'react';
import {
  Box,
  Button,
  css,
  Grid,
  Modal,
  OutlinedInput,
  TextField,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from '@mui/material';
import { DropletIcon, MusicIcon, SunIcon } from '../../svg';
import _ from 'lodash';
import {
  useForm,
  useFormContext,
  FormProvider,
  Controller,
} from 'react-hook-form';
import TaskAPI from '../../api/TaskAPI';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { asyncTasks, editTaskTarget, openTaskModal } from '../../atoms/task';

const iconCss = css({
  width: 140,
  height: 140,
});
const actionIconCss = css({
  width: 35,
  height: 35,
});
const iconVariant = {
  sun: <SunIcon css={iconCss} />,
  droplet: <DropletIcon css={iconCss} />,
  music: <MusicIcon css={iconCss} />,
};
export default function AddTaskModal() {
  const editableTask = useRecoilValue(editTaskTarget);
  const resetEditableTask = useResetRecoilState(editTaskTarget);
  const [open, setOpenTaskModal] = useRecoilState(openTaskModal);

  const methods = useForm({
    defaultValues:
      editableTask !== null
        ? {
            task_title: editableTask.task_title,
            expected_time: editableTask.expected_time,
            icon: editableTask.icon,
          }
        : {
            task_title: '',
            expected_time: 0.5,
            icon: 'sun',
          },
    shouldUnregister: true,
  });

  function closeModal() {
    setOpenTaskModal(false);
    methods.reset();
    resetEditableTask();
  }
  console.log(
    editableTask !== null
      ? {
          task_title: editableTask.task_title,
          expected_time: editableTask.expected_time,
          icon: editableTask.icon,
        }
      : {
          task_title: '',
          expected_time: 0.5,
          icon: 'sun',
        }
  );

  const reloadTasks = useResetRecoilState(asyncTasks);

  return (
    <FormProvider {...methods}>
      <Modal open={open} onClose={closeModal}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            if (editableTask !== null) {
              const { task_id, ...restData } = data;
              TaskAPI.editTask(task_id, restData).then(() => {
                reloadTasks();
                closeModal();
              });
            } else {
              TaskAPI.createTask(data).then(() => {
                reloadTasks();
                closeModal();
              });
            }
          })}
        >
          <Grid
            container
            sx={{
              justifyContent: 'center',
              backgroundColor: 'primary.main',
              padding: '20px',
              '@media(orientation:portrait)': {
                flexDirection: 'column',
              },
              position: 'absolute',
              left: '50%',
              bottom: 130,
              transform: 'translate(-50%)',
              maxWidth: '700px',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -20,
                left: '50%',
                transform: 'translate(-50%)',
                display: 'block',
                width: 0,
                zIndex: 1,
                borderStyle: 'solid',
                borderColor: (theme) =>
                  `${theme.palette.primary.main} transparent`,
                borderWidth: '20px 20px 0',
              },
            }}
          >
            <Grid
              item
              sx={{
                backgroundColor: 'background.default',
              }}
            >
              <FormRow />
            </Grid>
            <Grid item>
              <Grid
                container
                justifyContent="space-around"
                alignItems="stretch"
                direction="column"
                flexWrap="nowrap"
                padding="20px"
              >
                <Grid
                  item
                  sx={{
                    backgroundColor: 'primary.dark',
                  }}
                >
                  <IconSelect />
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    fullWidth
                    sx={{
                      backgroundColor: 'secondary.main',
                      borderRadius: '25px',
                      width: 1,
                      fontFamily: '"Slabo 27px"',
                      mt: 2,
                      fontSize: 24,
                      '&:hover': {
                        backgroundColor: 'secondary.main',
                      },
                    }}
                  >
                    SUBMIT
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    disableElevation
                    fullWidth
                    onClick={() => {
                      closeModal();
                    }}
                    sx={{
                      backgroundColor: 'secondary.main',
                      borderRadius: '25px',
                      width: 1,
                      fontFamily: '"Slabo 27px"',
                      mt: 2,
                      mb: 2,
                      fontSize: 24,
                      '&:hover': {
                        backgroundColor: 'secondary.main',
                      },
                    }}
                  >
                    CANCEL
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Modal>
    </FormProvider>
  );
}

function FormRow() {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const times = _.range(0.5, 24.5, 0.5);

  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="stretch"
      direction="column"
      flexWrap="nowrap"
      padding="20px"
      sx={{
        justifyContent: 'center',
      }}
    >
      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h1"
          fontFamily="'Slabo 27px'"
          color="secondary.main"
          sx={{
            fontSize: [36, 36, 54],
            mb: 3,
          }}
        >
          MAPLE LIFE
        </Typography>
      </Grid>
      <Grid item sx={{ mb: 5 }}>
        <Controller
          rules={{
            required: 'Please enter task',
          }}
          name="task_title"
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              variant="standard"
              placeholder="할 일을 적어주세요"
              fullWidth
              label={
                <Typography fontFamily="'Slabo 27px'" fontSize="24px">
                  Task Name
                </Typography>
              }
              margin="dense"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                style: {
                  color: '#5f5f5f',
                },
              }}
            />
          )}
        />
      </Grid>
      <Grid item sx={{ minWidth: 250, mb: 5 }}>
        <Controller
          rules={{
            required: 'Please select time',
          }}
          render={({ field, fieldState }) => (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Time</InputLabel>
              <Select
                {...field}
                error={!!fieldState.error}
                labelId="demo-simple-select-label"
                label="Time"
                input={<OutlinedInput label="Time" />}
                MenuProps={MenuProps}
              >
                {times.map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}H
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          name="expected_time"
        />
      </Grid>
    </Grid>
  );
}

function IconSelect() {
  const { setValue, watch } = useFormContext();

  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        flexWrap="nowrap"
      >
        <Grid item>
          <Box>{iconVariant[watch('icon')]}</Box>
        </Grid>
        <Grid item>
          <Button onClick={() => setValue('icon', 'sun')}>
            <SunIcon css={actionIconCss} />
          </Button>
          <Button onClick={() => setValue('icon', 'droplet')}>
            {' '}
            <DropletIcon css={actionIconCss} />
          </Button>
          <Button onClick={() => setValue('icon', 'music')}>
            {' '}
            <MusicIcon css={actionIconCss} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
