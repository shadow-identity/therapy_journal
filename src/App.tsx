import * as React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {JournalAppBar} from './JournalAppBar';
import CardList from './CardList';
import {getMuiTheme, lightBaseTheme} from 'material-ui/styles';
import {observable} from 'mobx';
import {Day} from './interfaces';
import {days} from './dataMock';
import DayCard from './DayCard';
import {inject, observer, Provider} from 'mobx-react';
import {TypedInject} from './typedInject';

export const journalTheme = getMuiTheme(lightBaseTheme);

export class JournalStore {
  @observable days: Day[] = days;
  @observable calendar = true;

  addDay(day: Day) {
    this.days.push(day);
  }
}

// const journal = new JournalStore();

const stores = {journal: new JournalStore()};
export const typedInject = inject as TypedInject<typeof stores>;

@observer
class App extends React.Component {
  render() {
    const content = stores.journal.calendar
      ? <CardList store={stores.journal}/>
      : <DayCard store={stores.journal}/>;

    return (
      <MuiThemeProvider muiTheme={journalTheme}>
        <Provider {...stores}>
          <JournalAppBar/>
          {content}
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
