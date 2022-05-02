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
  //~~~~~~~~~~~~~~~~~~~//
  //     VARIABLES     //
  //~~~~~~~~~~~~~~~~~~~//

  // GET TODAY DATE && ANNO
  const anno = new Date().toISOString().substring(2, 4)
  const today = new Date()
    .toLocaleString()
    .substring(0, 9)
    .replace(",", "")

  // FIREBASE VARIABLES
  const colRef = collection(db, "ids")
  const q = query(colRef, orderBy("rif", "desc"))

  // USE STATE
  const [inputText, setInputText] = useState("")
  const [elencoDocs, setElencoDocs] = useState([])
  const [idProgressivo, setIdProgressivo] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  //~~~~~~~~~~~~~~~~~~~//
  //     FUNCTIONS     //
  //~~~~~~~~~~~~~~~~~~~//

  // GET INPUT TEXT
  const handleChange = (e) => setInputText(e.target.value)

  // CLEAR INPUT TEXT ON FOCUS
  const handleFocus = () => setInputText("")

  // GET ELENCO DAL DB
  let showElenco = () => {
    onSnapshot(q, (snapshot) => {
      let documents = []
      snapshot.docs.forEach((doc) => documents.push(doc.data()))
      setElencoDocs(documents)
      setIsLoading(false)
    })
  }

  // ADD DOCUMENTO NEL DB
  const createDoc = async () => {
    await addDoc(colRef, {
      rif: idProgressivo,
      descrizione: inputText,
    })
  }

  // INCREMENTA ID PROGRESSIVO - inserisce 0 davanti a singoli digits
  let showProgressivo = () =>
    setIdProgressivo(`0${elencoDocs.length + 1}`.slice(-2))

  // CERCA DOCUMENTO TRAMITE DESCRIZIONE
  const handleCerca = (e) => {
    e.preventDefault()
    if (inputText.length !== 0) {
      let filteredDocuments = elencoDocs.filter((elem) => {
        if (inputText === 0) {
          return elem
        } else {
          return elem.descrizione.includes(inputText)
        }
      })
      let alertFilteredList = JSON.stringify(filteredDocuments)
      alert(`✅ Trovato: ➠ ' ${inputText} ' con rif. ${alertFilteredList}`)
      // clear input text
      setInputText("")
    } else {
      alert("❗ Nessun documento trovato")
    }
  }

  // GENERA UN DOCUMENTO NEL DB
  const handleGenera = (e) => {
    setIsLoading(true)
    e.preventDefault()
    if (
      inputText.length !== 0 &&
      window.confirm(
        `⚠ Premere OK per caricare documento ➠ rif. ${idProgressivo}`
      )
    ) {
      // crea documento
      createDoc()
      // clear input text
      setInputText("")
    } else {
      alert("❌ Caricamento annullato")
    }
  }

  // SHOW ELENCO IN REAL TIME
  // SHOW NUMERO PROGRESSIVO IN REAL TIME
  useEffect(() => {
    showElenco()
    showProgressivo()
  }, [elencoDocs])

  //~~~~~~~~~~~~~~~//
  //    RENDER     //
  //~~~~~~~~~~~~~~~//

  return (
    <div>
      <DataContext.Provider
        value={{
          anno,
          today,
          inputText,
          elencoDocs,
          isLoading,
          idProgressivo,
          handleChange,
          handleFocus,
          setInputText,
          handleCerca,
          handleGenera,
        }}
      >
        {props.children}
      </DataContext.Provider>
    </div>
  )
}

export default ContextProvider
