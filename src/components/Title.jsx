import React, { useContext } from "react"
// IMAGES
import logo from "../images/logo-itaf.png"
// CONTEXT
import { DataContext } from "../context"

export const Title = () => {
  const { today } = useContext(DataContext)

  return (
    <div className="title-container">
      <h3 className="title-title">ID generator</h3>
      <div className="title-date">{today}</div>
      <img className="title-img" src={logo} alt="logo" />
    </div>
  )
}
