import React, { Component } from "react"; 

class Filter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Data1:'',
             Data2:'' 
        }
    }
    handelInput = (e) =>
    {
        this.setState({
            [e.target.name] : e.target.value,  
        });

    }
    handle_submit = (e) =>{
        e.preventDefault();
        this.props.handleData(this.state)
        console.log(this.props.handleData)
    }
   

    
  render() {
    return (
     <div>
         <label>Data1:</label>
       <input type='text' name='Data1' value={this.state.Data1} onChange={this.handelInput} ></input>
     <br></br>  
       <label>Data2:</label>
       <input type='text' name='Data2' value={this.state.Data2} onChange={this.handelInput} ></input>
       <br></br>
<button onClick={this.handle_submit}>Submit</button>
     </div>

    );
  }
}

export default Filter;