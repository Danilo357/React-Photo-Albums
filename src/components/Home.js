import Album from "../components/Album"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"
import Pictures from "../components/Pictures"

function Hook(props) {
  const [animal, setAnimal] = useState([])
  const id = props.match.params.id

  useEffect(() => {
    axios.get("/albums").then(resp => {
      setAnimal(resp.data)
    })
  }, [])
  return (
    <div className="container">
      <div className="wrap">
        {animal.map(user => (
          <Link to={"/album/" + user.id} key={"user" + animal.id}>
            <p className="allb">
              <img className="pic" src={user.url} />
            </p>
            <p className="albumNames">{user.name}</p>
          </Link>
        ))}
      </div>
      {/* <h1>Hello {animal.name}</h1>
      <h1>Hello World</h1>
      <Link to="/album/1">Album</Link> */}
    </div>
  )
}

export default Hook
