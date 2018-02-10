import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import DateRangeIcon from 'material-ui-icons/DateRange';
import Typography from 'material-ui/Typography';
import TodayIcon from 'material-ui-icons/Today';
import {grey} from 'material-ui/colors';
import {observer} from 'mobx-react';
import {journalAppMenuStore, JournalAppMenuStore, JournalStore} from './data/stores';
import Toolbar from 'material-ui/Toolbar';
import Menu, {MenuItem} from 'material-ui/Menu';

const grey900 = grey['900'];

/*
const MainMenu = () => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton><MenuIcon color={grey900}/></IconButton>}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Drugs list"/>
      <MenuItem primaryText="Targets"/>
      <MenuItem primaryText="Questionnaire"/>
      <MenuItem primaryText="Save journal"/>
      <MenuItem primaryText="Load journal"/>
      <MenuItem primaryText="About"/>
    </IconMenu>
  </div>
);
*/

@observer
class LongMenu extends React.Component<{ store: JournalAppMenuStore }> {
  state = {anchorEl: null};

  handleClick = (event: Event) => {
    this.setState({anchorEl: event.currentTarget});
  }

  handleClose = () => {
    this.setState({anchorEl: null});
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
          <MenuItem children="Drugs list"/>
          <MenuItem children="Targets"/>
          <MenuItem children="Questionnaire"/>
          <MenuItem children="Save journal"/>
          <MenuItem children="Load journal"/>
          <MenuItem children="About"/>
          {/*<MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>*/}
            {/*{option}*/}
          {/*</MenuItem>*/}
        </Menu>
      </div>
    );
  }
}

const CalendarButton = observer((props: { store: JournalStore }) => (
  <IconButton onClick={() => props.store.calendar = !props.store.calendar}>
    {props.store.calendar ? <TodayIcon color={grey900}/> : <DateRangeIcon color={grey900}/>}
  </IconButton>
));

export const JournalAppBar = observer((props: { store: JournalStore }) => (
  <AppBar>
    <Toolbar>
      <CalendarButton store={props.store}/>
      <Typography variant="headline">
        Therapy Journal
      </Typography>
      <LongMenu store={journalAppMenuStore}/>
      {/*<MainMenu/>*/}
    </Toolbar>
  </AppBar>
));
