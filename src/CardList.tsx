import * as React from 'react';
import {observer} from 'mobx-react';
import Table, {TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui/Table';
import {Drug, Task} from './interfaces';
import DoneIcon from 'material-ui/svg-icons/action/done';
import {default as Card, CardText, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAddIcon from 'material-ui/svg-icons/content/add';
import {JournalStore} from './App';
import {SentimentIcons} from './Mood/Icons';

@observer
class CardTable extends React.Component<{store: JournalStore}, {}>  {
  render() {
    const days = this.props.store.days;
    function allDrugsTaken(drugs: Drug[]) {
      return drugs.reduce((acc, current) => acc && current.isTaken, drugs[0].isTaken === true);
    }

    function allTasksDone(tasks: Task[]) {
      return tasks.reduce((acc, current) => acc && current.isDone, tasks[0].isDone === true);
    }

    const dateRowWidth = '7em';
    const rows = days.map(day => (
      <TableRow key={day.date}>
        <TableRowColumn style={{width: dateRowWidth}}>{day.date}{SentimentIcons[day.mood]}</TableRowColumn>
        <TableRowColumn>{allDrugsTaken(day.drugs) ? <DoneIcon/> : null}</TableRowColumn>
        <TableRowColumn>{allTasksDone(day.tasks) ? <DoneIcon/> : null}</TableRowColumn>
        <TableRowColumn>{day.thoughts ? <DoneIcon/> : null}</TableRowColumn>
        <TableRowColumn>{day.dream ? <DoneIcon/> : null}</TableRowColumn>
      </TableRow>
    ));

    return (
      <Card style={{maxWidth: '600px', margin: 'auto'}}>
        <CardTitle
          title={
            <div>
              Therapy Calendar
              <FloatingActionButton
                style={{
                  position: 'absolute',
                  right: '20px',
                }}
                onClick={() => {this.props.store.calendar = false; }}
              >
                <ContentAddIcon/>
              </FloatingActionButton>
            </div>
          }
        />
        <CardText>
          <Table>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn style={{width: dateRowWidth}}>Date</TableHeaderColumn>
                <TableHeaderColumn>Drugs</TableHeaderColumn>
                <TableHeaderColumn>Tasks</TableHeaderColumn>
                <TableHeaderColumn>Thoughts</TableHeaderColumn>
                <TableHeaderColumn>Dreams</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {rows}

            </TableBody>
          </Table>
        </CardText>

      </Card>
    );
  }
}

export default CardTable;
