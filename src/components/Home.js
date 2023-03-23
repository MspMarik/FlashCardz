import React, { useState, useEffect, useRef, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";
// import { AuthContext } from "../firebase/Auth";
// import axios from "axios";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState(undefined);
    // const { currentUser } = useContext(AuthContext);
    let navigate = useNavigate();
    let card = null;

    useEffect(() => {
        setLoading(true);
        // if (!currentUser) {
        //     navigate("/login");
        // }
        // document.getElementById("ducksTab").classList.add("showlinkActive");
        // document.getElementById("matchesTab").classList.remove("showlinkActive");

        // if (currentUser) {
        //     document.getElementById("logoutTab").classList.remove("showlinkActive");
        // } else {
        //     document.getElementById("loginTab").classList.remove("showlinkActive");
        // }
        // document.getElementById("chatTab").classList.remove("showlinkActive");
        // async function get() {
        //     return await getNextProfile().data;
        // }
        // let c = get();
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div>
                <h2>Loading....</h2>
            </div>
        );
    } else {
        return (
            <div className="container align-self-center">
                <h2>Home</h2>
            </div>
        );
    }
};

export default Home;
