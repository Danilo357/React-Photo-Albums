import React from "react"
import Album from "../components/Album"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function Hook() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to="/album/1">Album</Link>
    </div>
  )
}

export default Hook
