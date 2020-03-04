import React, { Component } from "react";
import Input from './input'


class DynamicForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nation: [],
            nation1: {
                firstName: {
                    label: 'firstName',
                    type: 'text',
                    value: ''
                },
                lastName: {
                    label: 'LastName',
                    type: 'text',
                    value: ''
                },
                Email: {
                    label: 'Email',
                    type: 'Email',
                    value: ''
                }
            }
        }
    }
    // AddNation = (e) => {
    //     e.preventDefault();
    //     this.setState({ nation: [...this.state.nation, ''] })
    //     console.log('data is', this.state.nation)
    // }
    handle_change = (e) => {
        const { nation1 } = this.state
        nation1[e.target.name].value = e.target.value;
        this.setState(nation1)
    }
    // OnRemove = (index) => {
    //     this.state.nation.splice(index, 1)
    //     console.log(this.state.nation)
    //     this.setState({ nation: this.state.nation })

    // }
    // OnSubmit = (e) => {
    //     console.log(this.state.nation)
    // }




    render() {


        const f1 = Object.values(this.state.nation1).map(({ label, type, value }, index) => {
            const name = Object.keys(this.state.nation1)[index]
            return (
                <Input {...{ label, type, value, name }} onChange={this.handle_change} />
            )
        })
        //     const f1 = Object.keys(this.state.nation1).map((d, index) => {
        //         console.log('object', d)
        //   return (
        //            <Input d={Object.values(this.state.nation1[index])}/>
        //            )

        //     })

        //   const f1=  Object.keys(nation1).map(d=>{

        //         return (d)


        //     })

        //     const f2 = Object.values(nation1).map(d => {
        //         return (d)
        //             <

        // })
        return (
            <div>
                <h3>Dynamic form Demo</h3>
                {f1}

                {/* {
                    this.state.nation.map((nation, index) => {
                        return (
                            <div key={index}>
                                <input value={nation} onChange={(e) => this.handle_change(e, index)} />
                                <button onClick={(e) => this.OnRemove(e, index)}>Remove</button>
                            </div>
                        )
                    })
                }

                <hr />
                <button onClick={(e) => this.AddNation(e)}>Add Nation</button>

                <hr />
                <button onClick={(e) => this.OnSubmit(e)}>Submit</button>
                <hr />
                {
                    this.state.nation && this.state.nation.map((data) => {
                        return (
                            <div >
                                <li>{data}</li>
                            </div>
                        )
                    })
                } */}

            </div>
        );
    }
}

export default DynamicForm;