import * as React from 'react';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {observer} from 'mobx-react';
import ContentAddIcon from 'material-ui-icons/Add';
import {JournalStore} from '../data/stores';
import './styles.css';

@observer
class CardHeaderFAB extends React.Component<{ store: JournalStore, text: string }, {}> {
    render() {
        return (
            <header className="card-header">
                <Typography variant="headline">
                    {this.props.text}
                </Typography>
                <Button
                    variant="fab"
                    color="primary"
                    className="card-header__fab"
                    onClick={() => {
                        this.props.store.getDay();
                        this.props.store.calendar = false;
                    }}
                >
                    <ContentAddIcon />
                </Button>
            </header>
        );
    }
}

export default CardHeaderFAB;