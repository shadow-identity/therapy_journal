import * as React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {SentimentIcons} from './Icons';
import {Mood} from '../interfaces';

function MoodButton(props: { callBack: Function, mood: Mood }) {
  return (
    <FloatingActionButton
      onClick={() => {
        props.callBack(props.mood);
      }}
    >
      {SentimentIcons[props.mood]}
    </FloatingActionButton>
  );
}

export class MoodMenu extends React.Component<{moodCallBack: Function}, {}> {
  render() {
    return (
      <div>
        <MoodButton callBack={this.props.moodCallBack} mood={Mood.VerySatisfied}/>
        <MoodButton callBack={this.props.moodCallBack} mood={Mood.Satisfied}/>
        <MoodButton callBack={this.props.moodCallBack} mood={Mood.Neutral}/>
        <MoodButton callBack={this.props.moodCallBack} mood={Mood.Dissatisfied}/>
        <MoodButton callBack={this.props.moodCallBack} mood={Mood.VeryDissatisfied}/>
      </div>
    );
  }
}