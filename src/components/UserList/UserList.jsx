import React from 'react'
import Style from './UserList.module.css'
import Img1 from '../../assets/Header/logo-stackly.jpg'
import { Link } from 'react-router-dom'
export default function UserList() {
  return (
    <div className={Style.userListWrap}>
        <div className={Style.leftWrap}>
            <img src={Img1} alt="" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li>Service</li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
        <div className={Style.rightWrap}>

        </div>
    </div>
  )
}
