import * as React from 'react';
import {Card, CardActions, CardText, CardTitle} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui/svg-icons/content/add';
import {grey500} from 'material-ui/styles/colors';
import {journalTheme} from './App';
import {MoodComponent} from './Mood/Mood';
import FlatButton from 'material-ui/FlatButton';

const disabledColor = () => journalTheme.palette !== undefined ? journalTheme.palette.disabledColor : grey500;

class DayCard extends React.Component {
  render() {
    let day = this.props.store.day;
    const addElementInvitationStyle = {
      labelStyle: {color: disabledColor(), fill: disabledColor()},
      iconStyle: {color: disabledColor(), fill: disabledColor()}
    };

    const drugs = day.drugs.map((drug, i) => (
      <Checkbox
        key={i}
        checked={drug.isTaken}
        label={<span>{drug.name}
          <small>{drug.amount}</small></span>}
      />
    ));

    const tasks = day.tasks.map((task, i) => (
      <Checkbox key={i} checked={task.isDone} label={task.name}/>
    ));

    return (
      <Card className={'journal-card'}>
        <CardTitle
          title={
            <div>
              {day.date}
              <MoodComponent store={this.props.store}/>
            </div>
          }
        />
        <CardText>
          <div >
            <h3>Drugs</h3>
            {drugs}
            <Checkbox
              label={'Add another drug'}
              checkedIcon={<AddIcon/>}
              uncheckedIcon={<AddIcon/>}
              {...addElementInvitationStyle}
            />
          </div>
        </CardText>
        <CardText>
          <h3>Targets</h3>
          {tasks}
          <Checkbox
            label={'Add another target for today'}
            checkedIcon={<AddIcon/>}
            uncheckedIcon={<AddIcon/>}
            {...addElementInvitationStyle}
          />
          <h3>Thoughts and questions</h3>
          <TextField
            hintText={'Write your thougs or questions to your therapist here'}
            multiLine={true}
            rows={1}
            rowsMax={5}
            fullWidth={true}
            defaultValue={day.thoughts}
          />
          <h3>Dreams</h3>
          <TextField
            hintText={'Save your dreams for further analysis'}
            multiLine={true}
            rows={1}
            rowsMax={5}
            fullWidth={true}
            defaultValue={day.dream}
          />
        </CardText>
        <CardActions>
          <FlatButton label="Previous day"/>
          <FlatButton label="Next day"/>
        </CardActions>
      </Card>
    );
  }
}

export default DayCard;