import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import DateRangeIcon from 'material-ui/svg-icons/action/date-range';
import TodayIcon from 'material-ui/svg-icons/action/today';
import {black} from 'material-ui/styles/colors';
import {JournalStore, journalTheme} from './App';
import {observer} from 'mobx-react';

// rm it after IconButton color will be fixed at material-ui
const buttonColor = () => journalTheme.palette !== undefined ? journalTheme.palette.alternateTextColor : black;

const MainMenu = () => (
  <IconMenu
    iconButtonElement={<IconButton><MenuIcon color={buttonColor()}/></IconButton>}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem primaryText="Drugs list"/>
    <MenuItem primaryText="Targets"/>
    <MenuItem primaryText="Questionnaire"/>
    <MenuItem primaryText="Save journal"/>
    <MenuItem primaryText="Load journal"/>
    <MenuItem primaryText="About" />
  </IconMenu>
);

const CalendarButton = observer((props: {store: JournalStore}) => (
  <IconButton onClick={() => props.store.calendar = !props.store.calendar}>
    {props.store.calendar ? <TodayIcon color={buttonColor()}/> : <DateRangeIcon color={buttonColor()}/>}
  </IconButton>
));

export const JournalAppBar = observer((props: {store: JournalStore}) => (
  <AppBar
    title="Therapy Journal"
    iconElementRight={<div><CalendarButton store={props.store}/></div>}
    iconElementLeft={<MainMenu/>}
  />
));
