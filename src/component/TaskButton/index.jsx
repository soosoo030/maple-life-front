import React, { Component } from 'react'
import { Fab, styled } from '@mui/material';
import { PlusIcon } from '../../svg';

import AddTaskModal from '../AddTaskModal';
const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
  background: 'white',
});
class TaskButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <StyledFab
          color="white"
          aria-label="add"
          onClick={this.openModal}
        >
          <PlusIcon
            css={(theme) => ({
              fill: theme.palette.secondary.main,
            })}
          />
        </StyledFab>
        <AddTaskModal open={this.state.isModalOpen} closeModal={this.closeModal} />

      </>
    )
  }
}
export default TaskButton;