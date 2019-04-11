import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import './App.css';
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

    //Validate input and return output
    let result = logic.calculatePay(this.state.startTimeTextField, this.state.endTimeTextField, this.state.family);
    let element = document.querySelector(".output");
    if(result.length > 4){
      //error
      element.innerHTML = '<p><span className="outputTitle">ERROR: </span>'+ result+ '</p>';
    }else{
      element.innerHTML = '<p><span className="outputTitle">TOTAL EARNED: </span>$'+ result+ '</p>';
    }
    console.log();

  }


  render() {
    return (
      <div className="App">
        <form className="babysittingEveningForm" onSubmit={this.handleSubmit}>
        <h6>Babysitting Payment Calculator</h6>
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
          <input type="submit" value="Submit" />
          </FormControl>
          <br/><br/>
          <div className="output"></div>

        </form>
      </div>
    );
  }
}

export default withStyles(styles)(App);
