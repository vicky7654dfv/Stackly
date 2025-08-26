import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Users.module.css'

const users =[
    {id: "1", name: "Vignesh"},
    {id: "2", name: "Kavin"},
    {id: "3", name: "Ramya"}
]

export default function Users() {
  
    return (
    <div className={Style.usersWrap}>
        <h1>Users list</h1>
        {users.map(user =>(
            <div key={user.id}>
                <Link to={`/About/${user.id}`}>{user.name}</Link>
            </div>
        ))}
    </div>
  )
}
