import FloatingActionButton from 'material-ui/FloatingActionButton';
import {SentimentIcons} from './Icons';
import * as React from 'react';
import {JournalStore} from '../data/stores';
import {observer} from 'mobx-react';
import CloseIcon from 'material-ui-icons/Close';

export const MoodSelectButton = observer((props: { store: JournalStore }) => {
  let showMenu = props.store.showMoodMenu;
  let day = props.store.day;
  let MenuButton;
  if (!showMenu) {
    MenuButton = SentimentIcons[day.mood];
  } else if (showMenu) {
    MenuButton = <CloseIcon/>;
  }
  return (
    <FloatingActionButton
      onClick={() => {
        props.store.showMoodMenu = !showMenu;
      }}
    >
      {MenuButton}
    </FloatingActionButton>
  );
});