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
      ? {color: 'accent', children: 'Set your mood', raised: true}
      : {children: SentimentIcons[day.mood!]};

    return (
      <div className={'journal-floating-container'}>
        <Button {...selectButtonProps} onClick={this.handleMenuButtonClick}/>
        <MoodMenu store={store} menuState={this.menuState}/>
      </div>
    );
  }
}