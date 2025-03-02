import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { HashRouter as Router } from "react-router-dom";

function App() {
    return (
        <>
            <div className="major_container">
                <Router>
                    <Nav />
                    <Main />
                    <Footer />
                </Router>
            </div>
        </>
    );
}

export default App;
