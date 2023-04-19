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
            frontHTML: "What is the capital of Alaska?",
            backHTML: "Juneau",
        },
        {
            id: 2,
            frontHTML: "What is the capital of California?",
            backHTML: "Sacramento",
        },
        {
            id: 3,
            frontHTML: "What is the capital of New York?",
            backHTML: "Albany",
        },
        {
            id: 4,
            frontHTML: "What is the capital of Florida?",
            backHTML: "Tallahassee",
        },
        {
            id: 5,
            frontHTML: "What is the capital of Texas?",
            backHTML: "Austin",
        },
        {
            id: 6,
            frontHTML: "What is the capital of New Mexico?",
            backHTML: "Santa Fe",
        },
        {
            id: 7,
            frontHTML: "What is the capital of Arizona?",
            backHTML: "Phoenix",
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
