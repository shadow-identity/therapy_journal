import FloatingActionButton from 'material-ui/FloatingActionButton';
import {SentimentIcons} from './Icons';
import * as React from 'react';
import {JournalStore} from '../stores';

export function MoodSelectButton(props: {store: JournalStore}) {
  return (
    <FloatingActionButton

      onClick={() => {
        props.store.showMoodMenu = true;
      }}
    >
      {SentimentIcons[props.store.day.mood]}
    </FloatingActionButton>
  );
}