import { useState } from "react"

export default function Counter()  {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>count: {count} </div>
            <button onClick={()=> {setCount((c) => c + 1)} }> add 1</button>

        </div>
    )
}