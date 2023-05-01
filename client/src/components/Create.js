import React, { useContext, useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/esm/Overlay";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../firebase/Auth";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import logo from "../logo.svg";
import axios from "axios";
// import { doSignInWithEmailAndPassword } from "../firebase/FirebaseFunctions";
import "../App.css";

const Create = () => {
    const [loading, setLoading] = useState(true);
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const target = useRef(null);
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        setLoading(false);
        // document.getElementById("loginTab").classList.add("showlinkActive");
        // document.getElementById("ducksTab").classList.remove("showlinkActive");
        // document.getElementById("matchesTab").classList.remove("showlinkActive");

        // document.getElementById("chatTab").classList.remove("showlinkActive");
    }, []);

    // const { currentUser } = useContext(AuthContext);
    const currentUser = null;

    function submitCards(title, qnasList) {
        let qnasObjList = [];
        for (let i = 0; i < qnasList.length; i += 2) {
            qnasObjList.push({ q: qnasList[i], a: qnasList[i + 1] });
        }
        axios.post(`//localhost:5000/stack/${id}`, { userId: id, stack: qnasObjList, title: title }).then(function () {
            navigate(`/cards/${id}`);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        let qnas = document.getElementById("qnas").value.split("\n");
        let title = document.getElementById("title").value;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (qnas.length % 2 != 0) {
                alert("Oops! Looks like a question was left unanswered!");
                event.preventDefault();
                event.stopPropagation();
            }
            submitCards(title, qnas);
        }

        setValidated(true);
    };

    // if (currentUser) {
    //     return <Navigate to="/" />;
    // }
    if (loading) {
        return (
            <div>
                <h2>Loading....</h2>
            </div>
        );
    } else {
        return (
            // <div className="container align-self-center card-container">
            <div>
                <Navigation />
                <Card className="loginsignupcard loginboxshadow mt-3">
                    <Card.Body>
                        <Card.Title>Create a stack of flash cards!</Card.Title>
                        <Form className="p-3 text-start" noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Stack Title</Form.Label>
                                <Form.Control name="title" type="text" placeholder="History 101" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="qnas">
                                <Form.Label>
                                    Type your question, press enter, type your answer, press enter, repeat for all question/answer pairs
                                    {/* Type your questions and answers here{" "} */}
                                    {/* <Button ref={target} onMouseEnter={() => setShow(!show)} onMouseLeave={() => setShow(!show)}>
                                        How to input questions and answers (hover over me)
                                    </Button>
                                    <Overlay target={target.current} show={show} placement="top">
                                        {({ placement: _placement, arrowProps: _arrowProps, show: _show, popper: _popper, hasDoneInitialMeasure: _hasDoneInitialMeasure, ...props }) => (
                                            <div
                                                {...props}
                                                style={{
                                                    position: "absolute",
                                                    backgroundColor: "grey",
                                                    padding: "2px 10px",
                                                    marginBottom: "5px",
                                                    color: "white",
                                                    borderRadius: 3,
                                                    ...props.style,
                                                }}
                                            >
                                                Type your question, press enter, type your answer, press enter, repeat for all question/answer pairs
                                            </div>
                                        )}
                                    </Overlay> */}
                                </Form.Label>
                                <Form.Control name="qnas" as="textarea" placeholder="Type your questions and answers here..." required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="save-button">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>

            // </div>
        );
    }
};

export default Create;
