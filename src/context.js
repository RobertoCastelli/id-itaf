import React from "react";
// FIREBASE
import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";

// CREATE CONTEXT
export const DataContext = React.createContext();

const ContextProvider = (props) => {
  // TODAY DATEPICKER
  const today = new Date().toISOString().substring(0, 10);

  const getNotes = async () => {
    const notesSnapshot = await getDocs(collection(db, "ids"));
    const notesList = notesSnapshot.docs.map((doc) => doc.data());
    console.log(notesList);
  };
  getNotes();

  //~~~~~~~~~~~~~~~~//
  //    RENDER      //
  //~~~~~~~~~~~~~~~~//
  return (
    <div>
      <DataContext.Provider value={{ today }}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export default ContextProvider;
