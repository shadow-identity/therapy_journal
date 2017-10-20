import FloatingActionButton from 'material-ui/FloatingActionButton';
import {SentimentIcons} from './Icons';
import * as React from 'react';
import {MoodButtonStates, MoodStore} from './Mood';

export function MoodSelectButton(props: {moodStore: MoodStore}) {
  return (
    <FloatingActionButton

      onClick={() => {
        props.moodStore.moodButtonState = MoodButtonStates.menu;
      }}
    >
      {SentimentIcons[props.moodStore.currentMood]}
    </FloatingActionButton>
  );
}