import React, { Component } from "react";
import Checkbox from '@material-ui/core/Checkbox';

class Logical extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data1: 0,
            data: 0,
            sum: 0,
            Checked: false
        }
    }

    handle_event = (e) => {
        this.setState({ data1: e.target.value })
    }
    handle_event1 = (e) => {
        this.setState({ data: e.target.value })
    }

    handleChange = event => {
        //console.log(this.state.Checked)
        this.setState({ Checked: event.target.checked });
       console.log(event.target.checked)
        
    };
    submit_data = () => {
        //console.log(this.state.checked)

        if (this.state.Checked == true) {


            var t1 = document.getElementById('text1').value;
            var t2 = document.getElementById('text2').value;
            var result = parseInt(t1) + parseInt(t2);
            if (!isNaN(result)) {
                document.getElementById('t3').value = result;
            }
            this.setState({ sum: result })
            console.log('success')
        } else {
            alert('first select check_box')
        }

    }

    render() {
        return (
            <div>
                {/* <p>{this.props.name} and {this.props.age}</p>
  {this.props.children} */}
    <p> 
     </p>
                <Checkbox value={this.state.Checked} onChange={this.handleChange} />
                <input type='text' id='text1' value={this.state.data1} onChange={this.handle_event} />
                <input type='text' id='text2' value={this.state.data} onChange={this.handle_event1} />
                <input type='text' id='t3' value={this.state.sum} />

                <button onClick={this.submit_data}>Click</button>
                <p>{this.state.data1}</p> <p>{this.state.data}</p>

            </div>
        );
    }
}

export default Logical;