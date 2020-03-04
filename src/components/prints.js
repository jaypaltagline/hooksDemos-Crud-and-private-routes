import React, { Component } from "react"; 

class Prints extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             datas:['hellow', 'hi' , 'how r u']
        }
    }

    // handle_change = (e) =>{
    //     this.setState({datas:e.target.value})
    //     //console.log(e.target.value)
    // }

    submit_add = () => {
        
    }
    
  render() {
    return (
     <div>
         <input type='text' id='i1'/>
         <button onClick={this.submit_add}>add</button> 

       <table>
           <thead>
               <th>Data</th>
           </thead>
           <tbody>{
               this.state.datas.map(data => <tr key={data.id}> <td>{data}</td></tr>)
            }
           </tbody>
       </table>
     </div>
    );
  }
}

export default Prints;