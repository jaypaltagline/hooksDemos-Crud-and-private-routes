// import React from 'react'

// export default function Input() {
//     return (
//         <div>

// <label>{this.state.name}</label>
// <input type='text' name={this.state.name} ></input>       
//         </div>
//     )
// }


import React from 'react'

export default function Input({ name, label, type, value, onChange }) {
    return (
        <div>
            <label>{label}</label>
            <input name={name} type={type} value={value} onChange={onChange} />
        </div>
    )
}
