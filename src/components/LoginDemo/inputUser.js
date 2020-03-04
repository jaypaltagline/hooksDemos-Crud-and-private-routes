import React, { Component } from "react"; 


class InputUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            User:[{
                Email:'',
                FirstName:'',
                LastName:'',
                UserName:'',
                Password:'',
                id:1
                
              }]
            ,
            value: this.props.addUser
        }
      }
    SubmitLogOut = () => {
        this.props.history.push('/')
        console.log('success fully logout user')

    }
    
    handelInput = (e) =>
    {
        this.setState({User:{[e.target.name]: e.target.value,  
        }});

    }

    add(userss) {
        if (userss.length > 0) {
          this.props.addUser(userss);
          this.setState({value: ''});
        }
      }
    
   

    
  render() {
    return (
     <div>
       <center>
         {this.state.UserName}
                <table border='solid 50px'>
        
         <tr>
           <td>
       <label>UserName</label>
       </td>
       <td>
       <input type='text' name='UserName' value={this.state.User.value} onChange={this.handleChange}  />
       </td>
       </tr>
       <tr>
           <td>
       <label>FirstName</label>
       </td>
       <td>
       <input type='text' name='FirstName'  value={this.state.User.value} onChange={this.handleChange} />
       </td>
       </tr>
       <tr>
           <td>
       <label>LastName</label>
       </td>
       <td>
       <input type='text' name='LastName' value={this.state.User.value} onChange={this.handleChange} />
       </td>
       </tr>
       <tr>
           <td>
       <label>Email</label>
       </td>
       <td>
       <input type='text' name='Email' value={this.state.User.value} onChange={this.handleChange} />
       </td>
       </tr>
       <tr>
           <td>
       <label>Password</label>
       </td>
       <td>
       <input type='text' name='Password' value={this.state.User.value} onChange={this.handleChange} />
       </td>
       </tr>
      <button onClick={() => this.add(this.state.value)}  >Add</button>  
      <button onClick={this.SubmitLogOut}>LogOut</button>
      </table>
      </center>

     </div>
    );
  }
}

export default InputUser;