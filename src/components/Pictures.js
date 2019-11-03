import React, { useState, useEffect } from "react"
import axios from "axios"
// import Pictures from "../components/Pictures"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
function Pictures(props) {
  const [data, setData] = useState([])
  const id = props.match.params.id
  //ggg

  var slideIndex = 1
  showSlides(slideIndex)

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n))
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n))
  }
  //ggg
  function showSlides(n) {
    var i
    var slides = document.getElementsByClassName("")
    var dots = document.getElementsByClassName("dot")
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "")
    }
    // slides[slideIndex - 1].className.display = "block"
    // dots[slideIndex - 1].className += " active"
  }
  //ggg

  useEffect(() => {
    axios.get(`/photos/${id}`).then(resp => {
      setData(resp.data)
    })
  }, [id])

  return (
    <div>
      <p className="individual">{data.name}</p>
      <p className="allb">
        <img className="picture" src={data.url} />
        <a className="prev" onclick="plusSlides(-1)">
          &#10094;
        </a>
        <a className="next" onclick="plusSlides(1)">
          &#10095;
        </a>
      </p>

      {/* <div>
        <span className="dot" onclick="currentSlide(1)">
          ff
        </span>
        <span className="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
      </div> */}
    </div>
  )
}

export default Pictures
