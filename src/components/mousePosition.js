import React, { useState, useEffect } from 'react'

export default function mousePosition() {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const logmouseposition = e =>
    {
        setX(e.clientX)
        setY(e.clientY)
    }

     useEffect(() => {
        console.log('useeffect called')
        window.addEventListener('mousemove', logmouseposition)
    }, []) 
    return (
        <div>
            Hooks X{x} | y{y}
        </div>
    )
}
