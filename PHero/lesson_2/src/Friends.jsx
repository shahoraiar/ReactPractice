import { useState } from 'react'
import './Friend.css'

export default function Friends(){
    const [friends, setFriends] = useState([])
    return (
       <div className='box'>
         <h3>Friends : {friends.length}</h3>
       </div>
    )
}