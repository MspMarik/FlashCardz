import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";
// import { doSignOut } from "../firebase/FirebaseFunctions";

const Logout = () => {
    const [loading, setLoading] = useState(true);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        setLoading(true);
        setLoading(false);
        // document.getElementById("loginTab").classList.add("showlinkActive");
        // document.getElementById("ducksTab").classList.remove("showlinkActive");
        // document.getElementById("matchesTab").classList.remove("showlinkActive");

        // document.getElementById("chatTab").classList.remove("showlinkActive");
        // doSignOut();
        // document.getElementById("loginTab").classList.add("showlinkActive");
    }, []);

    if (loading) {
        return (
            <div>
                <h2>Loading....</h2>
            </div>
        );
    } else {
        return (
            <div className="container align-self-center card-container">
                <Card className="card-shadow">
                    <h2>You have been logged out!</h2>
                    <Link className="signuponloginpagelink mb-4" to="/login">
                        Click here to log back in.
                    </Link>
                </Card>
            </div>
        );
    }
};

export default Logout;
