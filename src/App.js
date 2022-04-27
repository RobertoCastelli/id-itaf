import React from "react";
// COMPONENTS
import { Title } from "./components/Title";
import { NumeroProgressivo } from "./components/NumeroProgressivo";
import { Elenco } from "./components/Elenco";
import { Footer } from "./components/Footer";
import ContextProvider from "./context";

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <div className="content">
          <Title />
          <NumeroProgressivo />
          <Elenco />
        </div>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
