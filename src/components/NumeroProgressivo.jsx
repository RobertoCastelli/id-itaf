import React from "react";

export const NumeroProgressivo = () => {
  return (
    <form className="numero-container">
      <h1 className="numero-content">01/2022</h1>
      <input type="text" name="input" placeholder="inserisci descrizione" />
      <button type="submit" className="numero-btn">
        GENERA
      </button>
    </form>
  );
};
