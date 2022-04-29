import React, { useState, useEffect } from "react"
// FIREBASE
import { db } from "./firebase"
import {
  addDoc,
  query,
  onSnapshot,
  collection,
  orderBy,
} from "firebase/firestore"

// CREATE CONTEXT
export const DataContext = React.createContext()

const ContextProvider = (props) => {
  // TODAY DATEPICKER
  const anno = new Date().toISOString().substring(2, 4)
  const today = new Date().toLocaleString().substring(0, 10)

  // FIREBASE VARIABLES
  const colRef = collection(db, "ids")
  const q = query(colRef, orderBy("rif", "desc"))

  // STATE
  const [inputText, setInputText] = useState("")
  const [elencoDocs, setElencoDocs] = useState([])
  const [idProgressivo, setIdProgressivo] = useState(0)

  // GET INPUT TEXT
  const handleChange = (e) => setInputText(e.target.value)

  // CLEAR INPUT TEXT ON FOCUS
  const handleFocus = () => setInputText("")

  // ADD DOC IN DB
  const createDoc = async () => {
    await addDoc(colRef, {
      rif: idProgressivo,
      descrizione: inputText,
    })
  }

  // INCREMENTA ID PROGRESSIVO - inserisce 0 davanti a singoli digits
  useEffect(() => {
    setIdProgressivo(elencoDocs.length + 1)
  }, [elencoDocs])

  // SHOW ELENCO FROM DB
  onSnapshot(q, (snapshot) => {
    let documents = []
    snapshot.docs.forEach((doc) => documents.push(doc.data()))
    setElencoDocs(documents)
  })

  // SUBMIT A DOC IN DB
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      window.confirm(`Premere OK per caricare documento ➡ ${idProgressivo}`)
    ) {
      createDoc()
      // clear input text after submit
      setInputText("")
    } else {
      alert("Caricamento annullato")
    }
  }

  //~~~~~~~~~~~~~~~~//
  //    RENDER      //
  //~~~~~~~~~~~~~~~~//
  return (
    <div>
      <DataContext.Provider
        value={{
          anno,
          inputText,
          elencoDocs,
          idProgressivo,
          handleSubmit,
          handleChange,
          handleFocus,
          setInputText,
        }}
      >
        {props.children}
      </DataContext.Provider>
    </div>
  )
}

export default ContextProvider
