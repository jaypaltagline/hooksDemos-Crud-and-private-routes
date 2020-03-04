import React, { Component } from "react"; 
import { push_uniq } from "terser";
import Pass2 from './Pass2';

class Pass1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             textbox1:'',
             textbox2:'',
             item:[]
        }
    }
    f_change =(e) =>{
        this.setState({textbox1:e.target.value})
    }
    l_change =(e) =>{
        this.setState({textbox2:e.target.value})
    }
    submit_data = () =>{
     
    }
    
    
  render() {
    return (
     <div>
        
       <form>
           <h4> Passing Data and use to diff pages</h4>
           <label>FirstName</label><br/>
           <input type='text' value={this.state.textbox1} onChange={this.f_change} name={this.state.textbox1} /><br />
           <label>LastName</label><br />
           <input type='text' value={this.state.textbox2} onChange={this.l_change} name={this.state.textbox2} /><br/>
           <button onClick={this.submit_data}>Click</button>
           
       </form>
       <hr>
      
       </hr>

             <center>            <table border='solid 2px' cellPadding='' cellSpacing=''>
                <thead>
                    <th>FirstName</th>
                    <th>LastName</th>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </center>
            <Pass2 />

     </div>
    );
  }
}

export default Pass1;