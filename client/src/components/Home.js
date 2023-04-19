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
import { Flashcard, FlashcardArray } from "react-quizlet-flashcard"; //https://www.npmjs.com/package/react-quizlet-flashcard
import logo from "../logo.svg";
import "../App.css";
// import { AuthContext } from "../firebase/Auth";
// import axios from "axios";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState(undefined);
    // const { currentUser } = useContext(AuthContext);
    let navigate = useNavigate();
    // let card = null;
    const cards = [
        {
            id: 1,
            front: "What is the capital of <u>Alaska</u>?",
            back: "Juneau",
            frontChild: <div>Hello there</div>,
            backChild: <p>This is a back child</p>,
        },
        {
            id: 2,
            front: "What is the capital of California?",
            back: "Sacramento",
        },
        {
            id: 3,
            front: "What is the capital of New York?",
            back: "Albany",
        },
        {
            id: 4,
            front: "What is the capital of Florida?",
            back: "Tallahassee",
        },
        {
            id: 5,
            front: "What is the capital of Texas?",
            back: "Austin",
        },
        {
            id: 6,
            front: "What is the capital of New Mexico?",
            back: "Santa Fe",
        },
        {
            id: 7,
            front: "What is the capital of Arizona?",
            back: "Phoenix",
        },
    ];

    useEffect(() => {
        setLoading(true);

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
            <div className="container d-flex align-self-center justify-content-center">
                <FlashcardArray cards={cards} />
            </div>
        );
    }
};

export default Home;
