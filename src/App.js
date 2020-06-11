import React from "react";
import Home from "./components/Home";
import NavBar from './components/NavBar'
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home />
      </header>
    </div>
  );
}

export default App;
