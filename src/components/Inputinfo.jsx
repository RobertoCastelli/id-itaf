import React, { useContext } from "react";
// CONTEXT
import { DataContext } from "../context";

export const InputInfo = () => {
  const {
    anno,
    inputText,
    handleSubmit,
    handleChange,
    handleFocus,
    idProgressivo,
  } = useContext(DataContext);

  return (
    <form className="numero-container" onSubmit={handleSubmit}>
      <h1 className="numero-content">
        {idProgressivo}/{anno}
      </h1>
      <input
        type="text"
        name="input"
        maxLength="30"
        placeholder="inserisci descrizione"
        value={inputText}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <button type="submit" className="numero-btn">
        GENERA
      </button>
    </form>
  );
};
