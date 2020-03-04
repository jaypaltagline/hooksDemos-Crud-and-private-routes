import React, { useState , useEffect } from 'react'

export default function LS() {
    const [data, setData] = useState(localStorage.getItem('my_value') || '')

    const changeData = event =>{
        
         setData(event.target.value)
        }
        useEffect(() =>{
           localStorage.setItem('my_value',data) 
        },[data])
    return (
        <div>
            <h3>react with localStorage Example</h3>
            <input type='text' value={data} onChange={changeData} />
    <p>{data}</p>
        </div>
    )
}
