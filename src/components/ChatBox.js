import React from 'react';
import TextField from '@material-ui/core/TextField';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';

export default class ChatBox extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="ChatBox">
          <div className="">
            <TextField name='user_name' onChange={this.props.onTextChange} className=""  placeholder="Name" /><br />
            <TextField name='profile_image' onChange={this.props.onTextChange} className="" placeholder="Profile Image URL" />
          </div>
          <TextField rows="4" multiLine="true" name='text' className="" onChange={this.props.onTextChange} />
          <Button primary="true" label="Send" className="" onClick={this.props.onButtonClick} />
        </div>
      </MuiThemeProvider>
    );
  }
}
