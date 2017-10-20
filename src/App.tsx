import * as React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {JournalAppBar} from './JournalAppBar';
import CardList from './DaysList';
import {getMuiTheme, lightBaseTheme} from 'material-ui/styles';
import DayCard from './DayCard';
import {observer} from 'mobx-react';
import {journal} from './stores';

export const journalTheme = getMuiTheme(lightBaseTheme);

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
