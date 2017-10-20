import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {black} from 'material-ui/styles/colors';
import {journalTheme} from './App';
import CalendarButton from './CalendarButton';

// rm it after IconButton color will be fixed at material-ui
export const buttonColor = () => journalTheme.palette !== undefined ? journalTheme.palette.alternateTextColor : black;

const RightMenu = () => (
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon color={buttonColor()}/></IconButton>}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Drugs list"/>
    <MenuItem primaryText="Targets"/>
    <MenuItem primaryText="Questionnaire"/>
    <MenuItem primaryText="Save journal"/>
    <MenuItem primaryText="Load journal"/>
    <MenuItem primaryText="About"/>
  </IconMenu>
);

// const CalendarButton = inject('daysStore')(observer(CalendarButtonInjected));

export const JournalAppBar = () => (
  <AppBar
    title="Therapy Journal"
    iconElementRight={<div><CalendarButton/><RightMenu/></div>}
    showMenuIconButton={false}
  />
);
