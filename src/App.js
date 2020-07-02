import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      {/* <HashRouter> */}
      <header className="App-header">
        {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />

          </Switch> */}
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </header>
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
