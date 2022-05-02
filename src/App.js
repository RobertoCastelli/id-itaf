import React from "react"
// CONTEXT
import ContextProvider from "./context"
// COMPONENTS
import { Title } from "./components/Title"
import { Elenco } from "./components/Elenco"
import { Footer } from "./components/Footer"
import { InputInfo } from "./components/Inputinfo"
import { Loading } from "./components/Loading"

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <div className="content">
          <Title />
          <Loading />
          <InputInfo />
          <Elenco />
        </div>
        <Footer />
      </div>
    </ContextProvider>
  )
}

export default App
