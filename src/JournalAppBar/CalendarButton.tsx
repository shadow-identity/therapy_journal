import * as React from 'react';
import {observer} from 'mobx-react';
import IconButton from 'material-ui/IconButton';
import TodayIcon from '@material-ui/icons/Today';
import DateRangeIcon from '@material-ui/icons/DateRange';
import {JournalStore} from '../data/stores';

const CalendarButton = observer((props: { store: JournalStore }) => (
  <IconButton onClick={() => props.store.calendar = !props.store.calendar}>
    {props.store.calendar ? <TodayIcon/> : <DateRangeIcon/>}
  </IconButton>
));

export default CalendarButton;
