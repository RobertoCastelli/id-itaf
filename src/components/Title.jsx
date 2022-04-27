import React from "react"
// IMAGES
import logo from "../images/logo-itaf.png"

export const Title = () => {
  return (
    <div className="title-container">
      <h3 className="title-title">ID generator</h3>
      <img className="title-img" src={logo} alt="logo" />
    </div>
  )
}
