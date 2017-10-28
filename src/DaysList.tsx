import * as React from 'react';
import {observer} from 'mobx-react';
import Table, {TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui/Table';
import {Drug, Task} from './data/interfaces';
import {default as Card, CardText, CardTitle} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAddIcon from 'material-ui-icons/Add';
import DoneIcon from 'material-ui-icons/Done';
import {JournalStore} from './data/stores';

@observer
class CardTable extends React.Component<{ store: JournalStore }, {}> {
  render() {
    const days = this.props.store.days;

    function allDrugsTaken(drugs: Drug[]) {
      return drugs.reduce((acc, current) => acc && current.isTaken, drugs[0].isTaken === true);
    }

    function allTasksDone(tasks: Task[]) {
      return tasks.reduce((acc, current) => acc && current.isDone, tasks[0].isDone === true);
    }

    const dateRowWidth = '7em';
    const rows = days.map((day, index) => (
      <TableRow key={index}>
        <TableRowColumn style={{width: dateRowWidth}}>{day.date}</TableRowColumn>
        <TableRowColumn>{allDrugsTaken(day.drugs) ? <DoneIcon/> : null}</TableRowColumn>
        <TableRowColumn>{allTasksDone(day.tasks) ? <DoneIcon/> : null}</TableRowColumn>
        <TableRowColumn>{day.thoughts ? <DoneIcon/> : null}</TableRowColumn>
        <TableRowColumn>{day.dream ? <DoneIcon/> : null}</TableRowColumn>
      </TableRow>
    ));

    return (
      <Card className={'journal-card'}>
        <CardTitle
          title={
            <div>
              Therapy Calendar
              <FloatingActionButton
                className={'journal-floating-container'}
                onClick={() => {
                  this.props.store.calendar = false;
                }}
              >
                <ContentAddIcon/>
              </FloatingActionButton>
            </div>
          }
        />
        <CardText>
          <Table
            onRowSelection={(rowNumber: number[]) => {
              this.props.store.day = days[rowNumber[0]];
              this.props.store.calendar = false;
            }}
          >
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn style={{width: dateRowWidth}}>Date</TableHeaderColumn>
                <TableHeaderColumn>Drugs</TableHeaderColumn>
                <TableHeaderColumn>Tasks</TableHeaderColumn>
                <TableHeaderColumn>Thoughts</TableHeaderColumn>
                <TableHeaderColumn>Dreams</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
              {rows}

            </TableBody>
          </Table>
        </CardText>

      </Card>
    );
  }
}

export default CardTable;
