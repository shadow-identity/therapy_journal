import * as React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {JournalAppBar} from './JournalAppBar';
import CardList from './DaysList';
import {getMuiTheme, lightBaseTheme} from 'material-ui/styles';
import {observable} from 'mobx';
import {Day} from './interfaces';
import {days} from './dataMock';
import DayCard from './DayCard';
import {observer} from 'mobx-react';

export const journalTheme = getMuiTheme(lightBaseTheme);

export class JournalStore {
  @observable days: Day[] = days;
  @observable calendar = true;

  addDay(day: Day) {
    this.days.push(day);
  }
}

const journal = new JournalStore();

@observer
class App extends React.Component {
  render() {
    const content = journal.calendar
      ? <CardList store={journal}/>
      : <DayCard store={journal}/>;

    return (
      <MuiThemeProvider muiTheme={journalTheme}>
        <div>
          <JournalAppBar store={journal}/>
          {content}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
