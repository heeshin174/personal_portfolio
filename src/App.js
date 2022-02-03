import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Resume from "./components/Resume/Resume";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Resume />
    </div>
  );
}

export default App;
