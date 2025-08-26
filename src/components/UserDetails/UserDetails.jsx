import React, { useCallback, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Style from './UserDetails.module.css'
export default function UserDetails() {
  const { id } = useParams()
  const [followed, setFollowed] = useState(false)

  const toggleFollow = useCallback(() => {
    setFollowed(prev => !prev)
  }, [])

  return (
    <div className={Style.userDetailsWrap}>
      <h2>User Details</h2>
      <p>User ID: {id}</p>
      <button onClick={toggleFollow}>
        {followed ? "Unfollow" : "Follow"}
      </button>
      <Link to="/">⬅ Back to Users</Link>
    </div>
  )
}
