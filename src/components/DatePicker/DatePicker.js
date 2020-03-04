import React, { Component } from "react"; 
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class DatePickerr extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            startDate: new Date()
        }
    }
    handleChange = (date) =>{
       // console.log('object', date)
  this.setState({
        startDate: date
        })
        }
         
        onFormSubmit =(e) =>{
        e.preventDefault();
        console.log(this.state.startDate)
        }
    
  render() {
     
    return (
     <div>
       <h2>Date Picker Demo In React</h2>
    
        <div className="text-center">
<form onSubmit={ this.onFormSubmit }>
<div className="form-group">
<DatePicker
selected={ this.state.startDate }
onChange={ this.handleChange }
dateFormat="MMMM d, yyyy"
className="form-control"
/>
</div>
<button className="btn btn-primary">Choose Date</button>
 
</form>
</div>
     </div>
    );
  }
}

export default DatePickerr;