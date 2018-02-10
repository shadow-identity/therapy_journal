import * as React from 'react';
import {Mood} from '../data/interfaces';
import {JournalStore, MoodMenuStore} from '../data/stores';
import {observer} from 'mobx-react';
import Menu, {MenuItem} from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import {EnumValues} from 'enum-values';
import {SentimentIcons} from './Icons';

@observer
export class MoodMenu extends React.Component<{ store: JournalStore, menuState: MoodMenuStore }, {}> {
  handleMenuClose = (): void => {
    this.props.menuState.showMenu = false;
  }

  handleMenuItemSelect = (mood: number) => {
    this.props.store.getDay(this.props.store.selectedDate).mood = mood;
    this.props.menuState.showMenu = false;
  }

  render() {
    const menuState = this.props.menuState;
    return (
      <Menu anchorEl={menuState.buttonEl} open={menuState.showMenu} onClose={this.handleMenuClose}>
        {/*<MenuList>*/}
          {EnumValues.getNamesAndValues(Mood).map(
            (key: { name: string, value: number }) =>
              <MenuItem
                key={key.value}
                onClick={() => this.handleMenuItemSelect(key.value)}
              >
                <ListItemIcon>
                  {SentimentIcons[key.value]}
                </ListItemIcon>
                <ListItemText primary={key.name} />
              </MenuItem>
          )
          }
        {/*</MenuList>*/}
      </Menu>

    );
  }
}