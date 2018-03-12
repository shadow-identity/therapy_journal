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
import withStyles from 'material-ui/styles/withStyles';
import {Theme} from 'material-ui';

const styles = (theme: Theme) => ({
  fab: {
    backgroundColor: 'red',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

// @observer
function CardTable(props: {store: JournalStore}): React.SFC {
    const days = props.store.days;

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
          props.store.selectedDate = days[index].date;
          props.store.calendar = false;
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
            className="fab"
            onClick={() => {
              props.store.getDay();
              props.store.calendar = false;
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

export default observer(withStyles(styles, { withTheme: true })(CardTable));
// export default CardTable;
