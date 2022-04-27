import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../context"

export const Elenco = () => {
  const { anno, elencoDocs } = useContext(DataContext)
  return (
    <div className="elenco-container">
      {elencoDocs.length !== 0 ? (
        <ul>
          {elencoDocs.map((doc) => {
            return (
              <li key={doc.id}>
                <div className="elenco-li">
                  <span className="elenco-id">
                    {doc.id}/{anno}
                  </span>{" "}
                  - {doc.createdAt} ➡ {doc.descrizione}
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="elenco-vuoto">
          nessun documento presente nel database
        </div>
      )}
    </div>
  )
}
