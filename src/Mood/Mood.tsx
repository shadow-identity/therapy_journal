import * as React from 'react';
import {observer} from 'mobx-react';
import Button from 'material-ui/Button';
import {MoodMenu} from './MoodMenu';
import {JournalStore, MoodMenuStore} from '../data/stores';
import {SentimentIcons} from './Icons';

@observer
export class MoodComponent extends React.Component<{ store: JournalStore }> {
  menuState = new MoodMenuStore();

  // tslint:disable-next-line
  handleMenuButtonClick = (event: any) => {
    this.menuState.showMenu = true;
    this.menuState.buttonEl = event.currentTarget;
  }

  handleMenuClose = (event: Event) => {
    this.menuState.showMenu = false;
  }

  render() {
    const store = this.props.store;
    const day = store.getDay(store.selectedDate);
    let selectButtonProps = day.mood! === null
      ? {children: 'Set your mood'}
      : {children: SentimentIcons[day.mood!]};

    return (
      <div>
        <Button {...selectButtonProps} onClick={this.handleMenuButtonClick} variant="raised"/>
        <MoodMenu store={store} menuState={this.menuState}/>
      </div>
    );
  }
}