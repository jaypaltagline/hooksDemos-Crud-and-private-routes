import React, { Component } from "react"; 
import Pass1 from './Pass1'
class Pass2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
  render() {
    return (
     <div>
        
    <p>{this.props.textbox1}</p>
    <p>{this.props.textbox2}</p>
     </div>
    );
  }
}

export default Pass2;