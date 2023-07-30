import React from "react";
import supabase from "./config/supabaseClient";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { HashRouter as Router } from "react-router-dom";
import Browser from "./components/Browser";

function App() {
  return (
    <>
    <div className="major_container">
      <Router>
        <Nav />
        <Browser />
        <Main />
        <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
