import {observer} from 'mobx-react';
import {JournalStore, typedInject} from './App';
import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import DateRangeIcon from 'material-ui/svg-icons/action/date-range';
import {buttonColor} from './JournalAppBar';

@observer
class CalendarButton extends React.Component<{ journal: JournalStore }, {}> {
  render() {
    console.log(this.props.journal.calendar);
    return (
      <IconButton>
        <DateRangeIcon color={buttonColor()}/>
      </IconButton>
    );
  }
}

export default typedInject('journal')(CalendarButton);
