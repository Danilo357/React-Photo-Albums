import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Home from "../components/Home"

function Album(props) {
  const [animal, setAnimal] = useState([])
  const id = props.match.params.id

  useEffect(() => {
    axios.get("/albums").then(resp => {
      setAnimal(resp.data)
    })
  }, [])

  const [data, setData] = useState([])
  const albumId = props.match.params.id

  useEffect(() => {
    axios.get(`/albums/${albumId}?_embed=photos`).then(resp => {
      setData(resp.data.photos)
      console.log(resp.data)
    })
  }, [albumId])

  return (
    <div className="firstcontainer">
      <div className="wrap1">
        {animal.map(user => (
          <Link to={"/album/" + user.id} key={"user" + animal.id}>
            {/* <p className="allb">
              <img className="pic" src={user.url} />
            </p> */}
            <p className="albumNames">{user.name}</p>
          </Link>
        ))}
      </div>
      <div className="container">
        <div className="wrap">
          {data.map(i => (
            <Link to={"/pictures/" + i.id} key={"user" + i.id}>
              <p className="page2wrap">
                <img className="pic" src={i.url} />
              </p>
              <p className="albumNames">{i.name}</p>
              {/* <h1>Hello {i.name}</h1> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Album
