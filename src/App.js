import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';

const styles = theme => ({

});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      family: '',
      startDateTime: '',
      endDateTime: '',
    };

    this.handleSelectValueChange = this.handleSelectValueChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSelectValueChange(event){
    this.setState({ [event.target.name]: event.target.value });
  };

  handleStartTimeChange(event){

    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
  }

  handleEndTimeChange(event){
    
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('submit hours clicked');
  }


  render() {
    return (
      <div className="App">
        <form className="babysittingEveningForm" onSubmit={this.handleSubmit}>
        <FormControl className="formControl">
          <InputLabel htmlFor="family-simple">Family:</InputLabel>
          <Select
            value={this.state.family}
            onChange={this.handleSelectValueChange}
            inputProps={{
              name: 'family',
              id: 'family-simple',
            }}
          >
            <MenuItem value="" selected>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Family A"}>Family A</MenuItem>
            <MenuItem value={"Family B"}>Family B</MenuItem>
            <MenuItem value={"Family C"}>Family C</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="formControl">
          <TextField
            id="datetime-local"
            label="Start Time"
            type="datetime-local"
            onChange={this.handleStartTimeChange}
            //value={this.state.startDateTime}
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </FormControl>
        <FormControl className="formControl">
          <TextField
            id="datetime-local"
            label="End Time"
            type="datetime-local"
            //value={this.state.endDateTime}
            
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </FormControl>
          <FormControl className="formControl">
          {/* <Button variant="contained" color="primary" className="button">
                Primary
          </Button> */}
          <input type="submit" value="Submit" />
          </FormControl>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(App);
