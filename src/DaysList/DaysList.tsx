import * as React from 'react';
import {observer} from 'mobx-react';
import Typography from 'material-ui/Typography';
import Table, {TableHead, TableRow, TableCell, TableBody} from 'material-ui/Table';
import Button from 'material-ui/Button';
import {Drug, Task} from '../data/interfaces';
import Card, {CardContent} from 'material-ui/Card';
import ContentAddIcon from 'material-ui-icons/Add';
import DoneIcon from 'material-ui-icons/Done';
import {JournalStore} from '../data/stores';

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
          <Typography variant="headline">
            Therapy Calendar
          </Typography>
          <Button
            variant="fab"
            color="primary"
            className="journal-floating-container"
            onClick={() => {
              this.props.store.getDay();
              this.props.store.calendar = false;
            }}
          >
            <ContentAddIcon/>
          </Button>
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
