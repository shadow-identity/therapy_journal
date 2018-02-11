import * as React from 'react';
import Card, {CardActions, CardContent, CardHeader} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import {grey} from 'material-ui/colors';
import {CSSProperties} from 'react';
import {MoodComponent} from '../Mood/Mood';
import Button from 'material-ui/Button';
import {JournalStore} from '../data/stores';
import {observer} from 'mobx-react';
import {NewListItem} from './NewListItem';
import {FormGroup, FormControlLabel} from 'material-ui/Form';
import Typography from 'material-ui/Typography';

const grey500 = grey['500'];

@observer
class DayCard extends React.Component<{ store: JournalStore }, {}> {
  render() {
    let day = this.props.store.getDay(this.props.store.selectedDate);
    const addElementInvitationStyle: CSSProperties = {
      labelStyle: {color: grey500, fill: grey500},
      iconStyle: {color: grey500, fill: grey500}
    };

    const drugs = day.drugs.map((drug, i) => (
      <span key={drug.name}>
      <Checkbox
        checked={drug.isTaken}
        onChange={(_, checked) => drug.isTaken = checked}
      />
        <span>
            <NewListItem
              text={drug.name}
              nameChangeCallBack={({target}) => drug.name = target.value}
            />
          {drug.name}
          <small>{drug.amount}</small>
          </span>
      </span>
    ));

    const tasks = day.tasks.map((task) => (
      <FormControlLabel
        control={<Checkbox key={task.name} checked={task.isDone}/>}
        label={task.name}
      />
    ));

    return (
      <Card className={'journal-card'}>
        <CardHeader
          action={<MoodComponent store={this.props.store}/>}
          title={day.date}
        />
        <CardContent>
          <div>
            <Typography>Drugs</Typography>
            <FormGroup>
              {drugs}
              <NewListItem
                placeholder={'Add new drug you\'ve taken today'}
                text={''}
                nameChangeCallBack={({target}) => day.drugs.push({name: target.value, isTaken: true})}
              />
              <FormControlLabel
                control={<Checkbox
                  checkedIcon={<AddIcon/>}
                  icon={<AddIcon/>}
                  {...addElementInvitationStyle}
                />}
                label={'Add another drug'}
              />
            </FormGroup>
          </div>
          <h3>Targets</h3>
          {tasks}
          <FormControlLabel
            control={
              <Checkbox
                checkedIcon={<AddIcon/>}
                icon={<AddIcon/>}
                {...addElementInvitationStyle}
              />
            }
            label={'Add another target for today'}
          />

          <h3>Thoughts and questions</h3>
          <TextField
            placeholder={'Write your thougs or questions to your therapist here'}
            multiline={true}
            rows={1}
            rowsMax={5}
            fullWidth={true}
            defaultValue={day.thoughts}
          />
          <h3>Dreams</h3>
          <TextField
            placeholder={'Save your dreams for further analysis'}
            multiline={true}
            rows={1}
            rowsMax={5}
            fullWidth={true}
            defaultValue={day.dream}
          />
        </CardContent>
        <CardActions>
          <Button>Previous day</Button>
          <Button>Next day</Button>>
        </CardActions>
      </Card>
    );
  }
}

export default DayCard;