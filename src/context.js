import React, { useState, useEffect } from "react";
// FIREBASE
import { db } from "./firebase";
import { addDoc, getDocs, collection } from "firebase/firestore";

// CREATE CONTEXT
export const DataContext = React.createContext();

const ContextProvider = (props) => {
  // TODAY DATEPICKER
  const anno = new Date().toISOString().substring(2, 4);

  // STATE
  const [inputText, setInputText] = useState("");
  const [elencoDocs, setElencoDocs] = useState([]);
  const [idProgressivo, setIdProgressivo] = useState(0);

  // ENTER DOCUMENTS IN ELENCO
  const createDoc = async () => {
    await addDoc(collection(db, "ids"), {
      id: idProgressivo,
      descrizione: inputText,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createDoc();
  };

  // GET INPUT TEXT
  const handleChange = (e) => setInputText(e.target.value);

  // CLEAR INPUT TEXT ON FOCUS
  const handleFocus = () => setInputText("");

  // INCREMENTA ID PROGRESSIVO
  useEffect(() => {
    setIdProgressivo(elencoDocs.length + 1);
  }, [elencoDocs]);

  // SHOW ELENCO FROM DB
  useEffect(() => {
    const showElenco = async () => {
      const idsSnapshot = await getDocs(collection(db, "ids"));
      const idsList = idsSnapshot.docs.map((doc) => doc.data());
      setElencoDocs(idsList);
    };
    return () => {
      showElenco();
    };
  }, [elencoDocs]);

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
  );
};

export default ContextProvider;
