import * as React from 'react';
import {observer} from 'mobx-react';
import {SpeedDial, BubbleList, BubbleListItem} from 'react-speed-dial';
// import {SentimentIcons} from './Icons';
// import CloseIcon from 'material-ui/svg-icons/navigation/close';

@observer
export class MoodComponent extends React.Component {
  render() {
    // let store = this.props.store;
    return (
      <SpeedDial
      >
        <BubbleList>
          <BubbleListItem primaryText={'lksdjf'}/>
        </BubbleList>
      </SpeedDial>
    );
  }
}