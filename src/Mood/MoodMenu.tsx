import * as React from 'react';
import {Mood} from '../data/interfaces';
import {JournalStore, MoodMenuStore} from '../data/stores';
import {observer} from 'mobx-react';
import Menu from 'material-ui-next/Menu';
import MenuItem from 'material-ui/MenuItem';
import {EnumValues} from 'enum-values';
import {SentimentIcons} from './Icons';

@observer
export class MoodMenu extends React.Component<{ store: JournalStore, menuState: MoodMenuStore }, {}> {
  handleMenuClose = (event: Event) => {
    this.props.menuState.showMenu = false;
  }

  handleMenuItemSelect = (mood: number) => {
    this.props.store.getDay(this.props.store.selectedDate).mood = mood;
    this.props.menuState.showMenu = false;
  }

  render() {
    const menuState = this.props.menuState;
    return (
      <Menu anchorEl={menuState.buttonEl} open={menuState.showMenu} onRequestClose={this.handleMenuClose}>
        {EnumValues.getNamesAndValues(Mood).map(
          (key: { name: string, value: number }) =>
            <MenuItem
              key={key.value}
              leftIcon={SentimentIcons[key.value]}
              onClick={() => this.handleMenuItemSelect(key.value)}
            >
              {key.name}
            </MenuItem>
        )
        }
      </Menu>

    );
  }
}