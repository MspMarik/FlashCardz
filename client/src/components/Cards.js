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
import Navigation from "./Navigation";
import axios from "axios";
// import { AuthContext } from "../firebase/Auth";
// import axios from "axios";

const Cards = () => {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);
    const [data, setData] = useState(undefined);
    let { id } = useParams();
    // const { currentUser } = useContext(AuthContext);
    let navigate = useNavigate();
    // let card = null;
    const cards = [];
    // {
    //     id: 1,
    //     frontHTML: "What is the capital of Alaska?",
    //     backHTML: "Juneau",
    // },
    // {
    //     id: 2,
    //     frontHTML: "What is the capital of California?",
    //     backHTML: "Sacramento",
    // },
    // {
    //     id: 3,
    //     frontHTML: "What is the capital of New York?",
    //     backHTML: "Albany",
    // },
    // {
    //     id: 4,
    //     frontHTML: "What is the capital of Florida?",
    //     backHTML: "Tallahassee",
    // },
    // {
    //     id: 5,
    //     frontHTML: "What is the capital of Texas?",
    //     backHTML: "Austin",
    // },
    // {
    //     id: 6,
    //     frontHTML: "What is the capital of New Mexico?",
    //     backHTML: "Santa Fe",
    // },
    // {
    //     id: 7,
    //     frontHTML: "What is the capital of Arizona?",
    //     backHTML: "Phoenix",
    // },

    function getData() {
        let d;
        axios.get(`//localhost:5000/user/userStack/${id}`).then(function (response) {
            // console.log(response);
            setData(response.data);
            d = response.data;
        });
        return d;
    }

    function buildStacks(dataa) {
        // let data = getData();
        let ret = [];
        //<FlashcardArray cards={cards} />
        for (let stack of dataa) {
            let title = stack.title;
            let cards = [];
            for (let card of stack.data) {
                let count = 1;
                cards.push({
                    id: count,
                    frontHTML: card.q,
                    backHTML: card.a,
                });
                card++;
            }
            ret.push(
                <span>
                    <h3>{title}</h3>
                    <FlashcardArray cards={cards} />
                </span>
            );
        }
        setContent(ret);
    }

    useEffect(() => {
        setLoading(true);
        if (!data) {
            async function getData() {
                await axios.get(`//localhost:5000/user/userStack/${id}`).then(function (response) {
                    // console.log(response);
                    setData(response.data);
                    buildStacks(response.data);
                });
            }
            getData();
        }
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div>
                <h2>Loading....</h2>
            </div>
        );
    } else if (content.length == 0) {
        return (
            <div>
                <h2>Fetching data....</h2>
            </div>
        );
    } else {
        return (
            <div className="">
                <Navigation />
                <div className="container d-flex align-self-center justify-content-center flex-column">{content}</div>
            </div>
        );
    }
};

export default Cards;
