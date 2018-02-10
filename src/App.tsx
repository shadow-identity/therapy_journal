import * as React from 'react';
import './App.css';
import {JournalAppBar} from './JournalAppBar';
import CardList from './DaysList/DaysList';
import DayCard from './DayCard/DayCard';
import {observer} from 'mobx-react';
import {journal} from './data/stores';
import DevTools from 'mobx-react-devtools';

@observer
class App extends React.Component {
  render() {
    const content = journal.calendar
      ? <CardList store={journal}/>
      : <DayCard store={journal}/>;

    return (
      <div>
        <JournalAppBar store={journal}/>
        {content}
        <DevTools/>
      </div>
    );
  }
}

export default App;
