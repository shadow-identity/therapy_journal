import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import DateRangeIcon from 'material-ui/svg-icons/action/date-range';
import {black} from 'material-ui/styles/colors';
import {JournalStore, journalTheme} from './App';
import {observer} from 'mobx-react';

// rm it after IconButton color will be fixed at material-ui
const buttonColor = () => journalTheme.palette !== undefined ? journalTheme.palette.alternateTextColor : black;

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
    <MenuItem primaryText="About" />
  </IconMenu>
);

const CalendarButton = observer((props: {store: JournalStore}) => (
  <IconButton onClick={() => props.store.calendar = true}>
    <DateRangeIcon color={buttonColor()}/>
  </IconButton>
));

export const JournalAppBar = observer((props: {store: JournalStore}) => (
  <AppBar
    title="Therapy Journal"
    iconElementRight={<div><CalendarButton store={props.store}/><RightMenu/></div>}
    showMenuIconButton={false}
  />
));
