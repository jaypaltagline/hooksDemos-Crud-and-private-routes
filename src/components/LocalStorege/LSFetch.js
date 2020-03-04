import React, { Component } from 'react'

export default class LSFetch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Query:'',
             hits:[]
        }
    }
    onChange = (e) =>{
        this.setState({Query:e.target.value})
    }
    onSubmit =(e) =>{
        e.preventDefault();
        const {Query} = this.state

        if(Query === '') return ;
        fetch('https://hn.algolia.com/api/v1/search?query=' + Query)
        .then(response => response.json())
        .then(result => this.onSetResult(result, Query));
    };
    onSetResult = (result, key) => {
        this.setState({ hits: result.hits });
    }
    
    render() {
        return (
            <div>
                <h2>Local_Storage_Fetch_Demo</h2>
                <form onSubmit={this.onSubmit}>
                <input type='text' onChange={this.onChange}/>
                <button>Search</button>
                </form>

                        {/* Result */}
        {this.state.hits.map(item => (
          <div key={item.objectID}>{item.title}</div>
        ))}
             </div>
        )
    }
}
