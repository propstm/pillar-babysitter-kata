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
import logic from "./logic"


const styles = theme => ({

});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      family: '',
      startTimeTextField: '',
      endTimeTextField: '',
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  onValueChange(event){
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(event){
    event.preventDefault();
    console.log('submit hours clicked');
    console.log("Family:" + this.state.family);
    console.log("StartTime:" + this.state.startTimeTextField);
    console.log("EndTime:"+ this.state.endTimeTextField);
    console.log(logic.calculatePay(this.state.startTimeTextField, this.state.endTimeTextField, this.state.family));
    
  }


  render() {
    return (
      <div className="App">
        <form className="babysittingEveningForm" onSubmit={this.handleSubmit}>
        <FormControl className="formControl">
          <InputLabel htmlFor="family-simple">Family:</InputLabel>
          <Select
            value={this.state.family}
            onChange={this.onValueChange}
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
            id="startTimeTextField"
            name="startTimeTextField"
            label="Start Time"
            type="datetime-local"
            onChange={this.onValueChange}
            //value={this.state.startDateTime}
            className={styles.textField}
            InputLabelProps={{
              name: 'startTimeLabel',
              id: 'startTimeLabel',
              shrink: true,
            }}
          />
          </FormControl>
        <FormControl className="formControl">
          <TextField
            id="endTimeTextField"
            name="endTimeTextField"
            label="End Time"
            type="datetime-local"
            onChange={this.onValueChange}
            
            className={styles.textField}
            InputLabelProps={{
              name: 'endTimeLabel',
              id: 'endTimeLabel',
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
        <div className="output">
          <p><span className="outputTitle">Total Earned: </span> $500</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
