import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useContext, useState, useEffect, useRef } from "react";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="">
                    {/* <h1>Skill Based Career Compass</h1> */}
                    <Navigation />
                </header>
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/signup" element={<Signup />} />
                        <Route exact path="/logout" element={<Logout />} />
                        <Route exact path="*" element={<NotFound />} />
                    </Routes>
                </main>
                {/* <footer className="App-footer fixed-bottom">
                    <Footer />
                </footer> */}
            </div>
        </Router>
    );
}

export default App;
