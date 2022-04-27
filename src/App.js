import React from "react";
// CONTEXT
import ContextProvider from "./context";
// COMPONENTS
import { Title } from "./components/Title";
import { Elenco } from "./components/Elenco";
import { Footer } from "./components/Footer";
import { InputInfo } from "./components/Inputinfo";

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <div className="content">
          <Title />
          <InputInfo />
          <Elenco />
        </div>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
