import { useEffect, useState } from "react"

export default function User(){
    const [users, setUsers] = useState([]);
    console.log('users : ', users);
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => setUsers(data.users.length))
        .then(count => console.log(count));
    }, [])

   function handleAdd(){
        const newCount = users + 1;
        setUsers(newCount);
   }
   function handleRemove(){
        const newCount = users - 1;
        setUsers(newCount);
   }

    return (
        <div style={{border: "2px solid tomato", marginBottom:'20px'}}>
            <h3>user : {users}</h3>

            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}