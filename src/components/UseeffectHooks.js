import React , {useState, useEffect} from 'react'

export default function UseeffectHooks() {
    
    const [count , setCount] = useState(0);
    useEffect(() => {
        document.title = `you click ${count} times`
    })
    return (
        <div>
<button onClick={() =>setCount(count + 1)}>click {count}</button>
        </div>
    )
}
