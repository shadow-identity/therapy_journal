import * as React from 'react';
import Input from 'material-ui/Input';

export class NewListItem extends React.Component<{
  placeholder?: string,
  text: string,
  nameChangeCallBack: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>}> {

  render() {
    return (
      <Input placeholder={this.props.placeholder} value={this.props.text} onChange={this.props.nameChangeCallBack}/>
    );
  }
}
