import * as React from 'react';
import {observer} from 'mobx-react';
import Table, {TableHead, TableRow, TableCell, TableBody} from 'material-ui/Table';
import {Drug, Task} from '../data/interfaces';
import Card, {CardContent} from 'material-ui/Card';
import DoneIcon from 'material-ui-icons/Done';
import {journal, JournalStore} from '../data/stores';
import CardHeaderFAB from '../components/CardHeader';

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
      <TableRow
        key={index}
        onClick={() => {
          this.props.store.selectedDate = days[index].date;
          this.props.store.calendar = false;
        }}
      >
        <TableCell style={{width: dateRowWidth}} padding="dense">{day.date}
        </TableCell>
        <TableCell>{day.drugs.length && allDrugsTaken(day.drugs) ? <DoneIcon/> : null}</TableCell>
        <TableCell>{day.tasks.length && allTasksDone(day.tasks) ? <DoneIcon/> : null}</TableCell>
        <TableCell>{day.thoughts ? <DoneIcon/> : null}</TableCell>
        <TableCell>{day.dream ? <DoneIcon/> : null}</TableCell>
      </TableRow>
    ));

    return (
      <Card className={'journal-card'}>
        <CardContent>
          <CardHeaderFAB store={journal} text={'Therapy Journal'}/>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{width: dateRowWidth}}>Date</TableCell>
                <TableCell>Drugs</TableCell>
                <TableCell>Tasks</TableCell>
                <TableCell>Thoughts</TableCell>
                <TableCell>Dreams</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

export default CardTable;
