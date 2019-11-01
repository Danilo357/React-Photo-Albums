import React, { useState, useEffect } from "react"
import axios from "axios"
import Pictures from "../components/Pictures"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function People(props) {
  const [user, setUser] = useState([])
  const id = props.match.params.id

  useEffect(() => {
    axios.get("/users").then(resp => {
      setUser(resp.data)
    })
  }, [])

  return (
    <div>
      {user.map(user => (
        <Link key={"user" + user.id}>
          <p>{user.name}</p>
        </Link>
      ))}
      <h1>Hello {user.name}</h1>
    </div>
  )
}

export default People
