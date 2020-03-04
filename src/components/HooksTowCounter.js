import React, {useState} from 'react'

export default function HooksTowCounter() {
    const [count , setCount] = useState(0)
    return (
        <div>
<p>count value is : {count}</p>
<button onClick={() => setCount(count + 1)}>add</button>
<button onClick={() => setCount(count - 1)}>minus</button>
<button onClick={() => setCount(0)}>reset</button>
        </div>
    )
}
