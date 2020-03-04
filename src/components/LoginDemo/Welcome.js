import React, { Component } from "react"; 

import InputUser from './inputUser'

class Welcome extends Component {
    constructor(props) {
        super(props)
    
        this.state ={ 
          User:[{
          Email:'',
          FirstName:'',
          LastName:'',
          UserName:'',
          Password:'',
          id:1
          
        }],
        NextId:2
       
      }
    }
    SubmitLogOut = () => {
        this.props.history.push('/')
        console.log('success fully logout user')

    }
    addUser(userList) {
      let Users = this.state.User.slice();
      Users.push({id: this.state.nextId, UserName: userList,FirstName: userList,LastName: userList,EmailName: userList,Password: userList});
      this.setState({
        User: Users,
        NextId: ++this.state.nextId
      });
    }
    
    handelInput = (e) =>
    {
        this.setState({User:{
            [e.target.name] : e.target.value,  
        }});

    }
    
   

    
  render() {
    return (
     <div>
       <InputUser userText="" addUser={this.addUser} />
       
      <ul>
            {
              this.state.User.map((Users) => {
                return <li  key={Users.id} id={Users.id}>{Users.UserName}</li>
              })
            }
          </ul>

     </div>
    );
  }
}

export default Welcome;