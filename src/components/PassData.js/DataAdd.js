import React, { Component } from "react"; 

class DataAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ID:0, 
            Data1:'',
             Data2:'',
             data:[]
        }
    }
    handelInput = (e) =>
    {
        this.setState({
            [e.target.name] : e.target.value,  
        });

    }
    onDelete = (index) => {
        let data = this.state.data;
        data.splice(index, 1);
        this.setState({data})
        
    }
    OnUpdate =(index) =>{
        let data = this.state.data;
        

    }
    handle_submit = event => {
        event.preventDefault();
        const Data11 = this.state.Data1
        const Data22 = this.state.Data2
        const data1 = this.state.data;
        const info = {ID: data1.length + 1 ,Data1: Data11, Data2: Data22}
        data1.push(info);
        this.setState({
          data: data1
        });
       };

  render() {
    return (
        <div>
           <h3>User Data Example</h3> 
        <label>Data1:</label>
      <input type='text' name='Data1' value={this.state.Data1} onChange={this.handelInput} ></input>
    <br></br>  
      <label>Data2:</label>
      <input type='text' name='Data2' value={this.state.Data2} onChange={this.handelInput} ></input>
      <br></br>
<button onClick={this.handle_submit}>Submit</button>
    
        {console.log('this.state.data', this.state.data)}
        {
            this.state.data && this.state.data.map((d , index) => {              
            return  <p key={index.id}>{d.ID}|{d.Data1}|{d.Data2}
            <button onClick={() => this.onDelete(index)}>Delete</button>
            <button onClick={() => this.OnUpdate(index)}>Edit</button>
            
             </p> 
                    }) 
        }
    </div>
    );
  }
}

export default DataAdd;