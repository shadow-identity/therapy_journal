import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import {observer} from 'mobx-react';
import {JournalStore} from '../data/stores';
import Toolbar from 'material-ui/Toolbar';
import MainMenu from './MainMenu';
import CalendarButton from './CalendarButton';

/*
    <IconMenu
      iconButtonElement={<IconButton><MenuIcon color={grey900}/></IconButton>}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    >
*/

export const JournalAppBar = observer((props: { store: JournalStore }) => (
  <AppBar position="static">
    <Toolbar>
      <MainMenu/>
      <Typography variant="title">
        Therapy Journal
      </Typography>
      <CalendarButton store={props.store}/>
    </Toolbar>
  </AppBar>
));
