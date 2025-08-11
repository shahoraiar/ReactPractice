import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    function handleAdd(){
        const newCount = count + 1; 
        setCount(newCount);
    }
    function handleReduce(){
        const newCount = count - 1; 
        setCount(newCount);
    }
    return(
        <div style={{border : "2px solid red"}}>
            <h3>Count : {count}</h3>

            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}