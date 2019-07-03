import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
