import React, { Component } from "react";
import { userInfo } from "os";

class CrudData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Id: 0,
            act:0,
            FirstName: '',
            LastName: '',
            Email: '',
            Mobile_No: '',
            Xender: '',
            index1:'',
            Users_data: []
        }
    }
    componentDidMount() {
        const users = JSON.parse(localStorage.getItem('UserData'));
        this.setState({ Users_data: users })
    }

    handle_change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    OnSubmit = (e) => {
        if (this.state.act === 0){
        e.preventDefault();
        const FirstName = this.state.FirstName
        const LastName = this.state.LastName
        const Email = this.state.Email
        const Mobile_No = this.state.Mobile_No
        const Xender = this.state.Xender
        const Users_data = this.state.Users_data
        const info = { ID: Users_data.length + 1, FirstName: FirstName, LastName: LastName, Email: Email, Mobile_No: Mobile_No, Xender: Xender }
        Users_data.push(info)
        this.setState({ Users_data: Users_data })
        localStorage.setItem('UserData', JSON.stringify(this.state.Users_data))
        this.setState({ FirstName: '' , LastName: '' , Email: '' , Mobile_No: '' , Xender: '' })
        }else
        {
            const FirstName = this.state.FirstName
            const LastName = this.state.LastName
            const Email = this.state.Email
            const Mobile_No = this.state.Mobile_No
            const Xender = this.state.Xender
            const Users_data = this.state.Users_data
           let index = this.state.index1;
            Users_data[index].FirstName = FirstName;
            Users_data[index].LastName = LastName;
            Users_data[index].Email = Email;
            Users_data[index].Mobile_No = Mobile_No;
            Users_data[index].Xender = Xender;
            const info = { ID: Users_data.length + 1, FirstName: FirstName, LastName: LastName, Email: Email, Mobile_No: Mobile_No, Xender: Xender }
       
            this.setState({ Users_data: Users_data })
        localStorage.setItem('UserData', JSON.stringify(this.state.Users_data))
        }

    }
    OnEdit = (index) => {
        let Edata = this.state.Users_data[index];
        this.state.FirstName = Edata.FirstName;
        this.state.LastName = Edata.LastName;
        this.state.Email = Edata.Email;
        this.state.Mobile_No = Edata.Mobile_No;
        this.state.Xender = Edata.Xender;
    
        this.setState({
          act: 1,
          index1: index 
        })

        this.refs.FirstName.focus();
    }
    
    OnDelete = (index) => {
        //console.log('id is', index)

       if(window.confirm('Are you sure you wish to delete this item?')){
        let UserData = this.state.Users_data
        UserData.splice(index, 1)

        this.setState({ UserData })
        localStorage.setItem('UserData', JSON.stringify(UserData))

       }else{
        console.log('all are good')
   }
       

    }

    render() {
        const { Users_data } = this.state;
        return (
            <div>
                <form border='solid 40px'>
                    <center>
                        <h3>User Information</h3>
                        <table border='solid 20dm'>
                            <tbody>

                                <tr>
                                    <td>FirstName</td>
                                    <td><input type='text'  value={this.state.FirstName} name='FirstName' ref='FirstName' onChange={this.handle_change}  required/></td>
                                </tr>
                                <tr>
                                    <td>LastName</td>
                                    <td><input type='text' value={this.state.LastName} name='LastName' ref='LastName' onChange={this.handle_change}  /></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td><input type='email' value={this.state.Email} name='Email' ref='Email' onChange={this.handle_change}  /></td>
                                </tr>
                                <tr>
                                    <td>Mobile_No</td>
                                    <td><input type='text' value={this.state.Mobile_No} name='Mobile_No' ref='Mobile_No' onChange={this.handle_change} /></td>
                                </tr>
                                <tr>
                                    <td>Xender</td>
                                    <td><input type='text' value={this.state.Xender} name='Xender' ref='Xender' onChange={this.handle_change}  /></td>
                                </tr>
                                <tr>

                                    <td>
                                        <button onClick={(e) => this.OnSubmit(e)}>Add</button>
                                    </td>


                                </tr>
                            </tbody>
                        </table>

                        <h3>User_Information_List</h3>
                        <table border='solid'>
                            <thead>
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Email</th>
                                    <th>Mobile_No</th>
                                    <th>Xender</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Users_data && Users_data.map((UserData, index) => {
                                        return <tr key={index}>
                                            {/* <td>{UserData.ID}</td> */}
                                            <td>{UserData.FirstName}</td>
                                            <td>{UserData.LastName}</td>
                                            <td>{UserData.Email}</td>
                                            <td>{UserData.Mobile_No}</td>
                                            <td>{UserData.Xender}</td>
                                            <td>
                                            <button onClick={() => this.OnDelete(index)}>Delete</button>
                                            <button type="button" onClick={() => this.OnEdit(index)}>Edit</button>
                                            </td>

                                        </tr>
                                    })

                                }
                            </tbody>
                        </table>
                    </center>
                </form>
            </div>
        );
    }
}

export default CrudData;