import React from "react"
import axios from "axios"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from "../components/Home"
import Album from "../components/Album"
import Pictures from "../components/Pictures"
// import db from "./"

function App(promp) {
  return (
    <Router>
      <div>
        <Route path="/users/:id" />
        <Route exact path="/" component={Home}></Route>
        <Route path="/album/:id" component={Album}></Route>
        <Route path="/pictures" component={Pictures}></Route>
      </div>
    </Router>
  )
}

export default App
