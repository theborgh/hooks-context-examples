import React from "react";
import Counter from "./Counter";
import Toggler from "./Toggler";
import Form from "./Form";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import ContextClass from "./ContextClass";
import ContextHook from "./ContextHook";
import CounterReducer from "./CounterReducer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Toggler />
      <Form />

      <LanguageProvider>
        <ThemeProvider>
          <ContextClass />
          <ContextHook />
        </ThemeProvider>
      </LanguageProvider>

      <CounterReducer />
    </div>
  );
}

export default App;
