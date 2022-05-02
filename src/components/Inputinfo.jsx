import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../context"

export const InputInfo = () => {
  const {
    anno,
    inputText,
    handleChange,
    handleFocus,
    idProgressivo,
    handleGenera,
    handleCerca,
  } = useContext(DataContext)

  return (
    <form className="numero-container">
      <h1 className="numero-numero">
        ID {idProgressivo}/{anno}
      </h1>
      <input
        required
        type="text"
        name="input"
        maxLength="30"
        placeholder="inserisci descrizione"
        value={inputText}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <div className="numero-btns">
        <button
          onClick={handleGenera}
          id="genera"
          type="submit"
          className="numero-btn-genera"
        >
          GENERA
        </button>
        <button
          onClick={handleCerca}
          id="cerca"
          type="submit"
          className="numero-btn-cerca"
        >
          CERCA
        </button>
      </div>
    </form>
  )
}
