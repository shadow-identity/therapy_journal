import * as React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {JournalAppBar} from './JournalAppBar/JournalAppBar';
import CardList from './DaysList/DaysList';
import DayCard from './DayCard/DayCard';
import {journal} from './data/stores';
import './App.css';

@observer
class App extends React.Component {
  render() {
    const content = journal.calendar
      ? <CardList store={journal}/>
      : <DayCard store={journal}/>;

    return (
      <div>
        <CssBaseline />
        <JournalAppBar store={journal}/>
        {content}
        <DevTools/>
      </div>
    );
  }
}

export default App;
