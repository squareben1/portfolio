import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Home />
        <About />
        <Projects />
        <Contact />
      </header>
    </div>
  );
}

export default App;
