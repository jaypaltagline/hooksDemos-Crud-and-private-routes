import React, { useState } from 'react'

export default function ArrayHooks() {
    const [items ,setItems] = useState([])

   const add = () =>{

        setItems([...items ,{
            id:items.length,
            value:Math.floor(Math.random() * 10) + 1 
        }])
    }
    return (
        <div>

            <button onClick={add}>add data</button>
            <ul>
                {
                    items.map(item => (<li key={item.id}>
                        {item.id}|
                        {item.value}</li>))
                }
            </ul> 
        </div>
    )
}
