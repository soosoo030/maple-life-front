import React, { useState } from 'react';
import { Box, Button, css, Grid, Modal, OutlinedInput, TextField, Typography, FormControl, MenuItem, InputLabel, Select } from '@mui/material';
import { DropletIcon, MusicIcon, SunIcon } from '../../svg';


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
export default function AddTaskModal({ open, closeModal }) {
  return (
    <Modal open={open} onClose={closeModal}
      sx={{
        padding: 2,
        maxWidth: '700px',
      }}
    >
      <Grid container
        display="flex"
        sx={{
          justifyContent: "center",
          backgroundColor: 'primary.main',
          padding: '20px',
          '@media(orientation:portrait)': {
            flexDirection: 'column'
          }
        }}
      >
        <Grid item
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
            <Grid item
              sx={{
                backgroundColor: 'primary.dark'
              }}
            >
              <IconSelect />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                disableElevation
                fullWidth
                onClick={() => { closeModal(); }}
                sx={{
                  backgroundColor: 'secondary.main',
                  borderRadius: '25px',
                  width: 1,
                  fontFamily: '"Slabo 27px"',
                  mt: 2,
                  fontSize: 24,
                  '&:hover': {
                    backgroundColor: 'secondary.main'
                  }
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
                onClick={() => { closeModal() }}
                sx={{
                  backgroundColor: 'secondary.main',
                  borderRadius: '25px',
                  width: 1,
                  fontFamily: '"Slabo 27px"',
                  mt: 2,
                  mb: 2,
                  fontSize: 24,
                  '&:hover': {
                    backgroundColor: 'secondary.main'
                  }

                }}
              >
                CANCEL
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Modal >
  )
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
  const [time, setTime] = React.useState('');
  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const times = [
    '0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0',
    '5.5', '6.0', '6.5', '7.0', '7.5', '8.0', '8.5', '9.0', '9.5', '10.0'
  ]
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="stretch"
      direction="column"
      flexWrap="nowrap"
      padding="20px"
      sx={{
        justifyContent: 'center'
      }}
    >
      <Grid item
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
        <TextField
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
            }
          }}
        />
      </Grid>
      <Grid item sx={{ minWidth: 250, mb: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={time}
            label="Time"
            input={<OutlinedInput label="Time" />}
            MenuProps={MenuProps}
            onChange={handleChange}
          >
            {times.map((time) => (
              <MenuItem
                key={time}
                value={time}
              >{time}H
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}


function IconSelect() {
  const [value, setValue] = useState('sun');

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
          <Box>
            {iconVariant[value]}
          </Box>
        </Grid>
        <Grid item>
          <Button onClick={() => setValue('sun')}><SunIcon css={actionIconCss} /></Button>
          <Button onClick={() => setValue('droplet')} > <DropletIcon css={actionIconCss} /></Button>
          <Button onClick={() => setValue('music')} > <MusicIcon css={actionIconCss} /></Button>
        </Grid>
      </Grid>
    </Box>
  )
}