import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ReactGA from "react-ga";
import "./styles/main.scss";

function initializeReactGA() {
  ReactGA.initialize('UA-171801488-1');
  ReactGA.pageview('/');
}

initializeReactGA()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
