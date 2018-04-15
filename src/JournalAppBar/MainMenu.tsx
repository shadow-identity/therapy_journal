import * as React from 'react';
import {observer} from 'mobx-react';
import IconButton from 'material-ui/IconButton';
import Menu, {MenuItem} from 'material-ui/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

interface MenuState {
  anchorEl: HTMLElement | undefined;
}

@observer
class MainMenu extends React.Component<{}, MenuState> {
  state = {anchorEl: undefined};

  handleClick = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({anchorEl: event.currentTarget});
  }

  handleClose = () => {
    this.setState({anchorEl: undefined});
  }

  render() {
    const {anchorEl} = this.state;

    return (
      <div>
        <IconButton onClick={this.handleClick}>
          <MoreVertIcon/>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} children="Drugs list"/>
          <MenuItem onClick={this.handleClose} children="Targets"/>
          <MenuItem onClick={this.handleClose} children="Questionnaire"/>
          <MenuItem onClick={this.handleClose} children="Save journal"/>
          <MenuItem onClick={this.handleClose} children="Load journal"/>
          <MenuItem onClick={this.handleClose} children="About"/>
          {/*<MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>*/}
        </Menu>
      </div>
    );
  }
}

export default MainMenu;