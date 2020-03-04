import React, { Component } from "react"; 

class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Count:0
        }
    }
    handleclick = () =>
    {
        this.setState({Count:this.state.Count + 1})
    }
    
  render() {
    return (
     <div>
  <p>counter value is {this.state.Count}</p>
  <button onClick={this.handleclick}>click</button>
     </div>
    );
  }
}

export default ClassCounter;