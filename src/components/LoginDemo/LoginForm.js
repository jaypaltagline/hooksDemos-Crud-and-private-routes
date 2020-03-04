import React, { Component } from "react";
import {Link,Route,Redirect, Switch} from 'react-router-dom';
import Welcome from "./Welcome";


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            items: [],
            pass1: 'jaypal',
            user1: 'jaypal'


        }
    }
    // componentDidMount(){
    //     const users = JSON.parse(localStorage.getItem('UserData'));
    //         this.setState({items: users})
    //    // console.log(users)
    //   // console.log(this.state.items)
    // }
    user_change = (e) => {
        this.setState({ username: e.target.value })
        console.log(e.target.value)
    }
    pass_change = (e) => {

        this.setState({ password: e.target.value })
        console.log(e.target.value)
    }
    submit_login = (e) => {
        var username = this.state.username
        var password = this.state.password
        var conformpassword = this.state.pass1
        var conformusername = this.state.user1
        e.preventDefault()
        if (username === conformusername && password === conformpassword) {

          this.props.history.push('/CrudData')
        }
        else {
          
            alert('wrong user & password')
        }

    }





    render() {
        return (
            <div>


                <form>

                    <center>

                        <hr></hr>
                        <h3>
                            React App
                
                           </h3>
                       
                        <hr></hr>
                        <h3>Login_Form </h3>
                        <label>UserName</label><br />
                        <input type='text' onChange={this.user_change} name={this.state.username} /> <br />
                        <label>password</label><br />
                        <input type='text' onChange={this.pass_change} /><br />
                        <button onClick={this.submit_login}>Login</button>
                    </center>
                </form>

            </div>
        );
    }
}

export default Login;