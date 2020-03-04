import React, { useState } from 'react'

export default function HooksCounterObj() {

    const [name , setName] = useState({firstName:'' , LastName:''})
    return (
        <div>
            <input type='text' value={name.firstName} onChange={e => setName({ ...name,firstName:e.target.value})}/>
            <input type='text' value={name.LastName} onChange={e => setName({ ...name ,LastName:e.target.value })}/>
    <h1>firstName is {name.firstName}</h1>
    <h1>LastName is {name.LastName}</h1>
        </div>
    )
}
