import React, { Component } from "react";
import Filter from './filter';

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Data1: '',
            Data2: ''
        }
    }
    ParentData = (data) => {

        this.setState({ ...data })
        console.log(data);
    }
    render() {
        return (
            <div>
                <Filter handleData={this.ParentData} />
                <p>{this.state.Data1}</p>
                <p>{this.state.Data2}</p>
            </div>
        );
    }
}
export default Result;