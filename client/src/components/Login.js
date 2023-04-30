import React, { useContext, useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { AuthContext } from "../firebase/Auth";
import { useParams } from "react-router-dom";
import logo from "../logo.svg";
// import { doSignInWithEmailAndPassword } from "../firebase/FirebaseFunctions";
import "../App.css";
import Navigation from "./Navigation";

const Login = () => {
    const [loading, setLoading] = useState(true);
    const [validated, setValidated] = useState(false);
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
    const handleLogin = async (event) => {
        event.preventDefault();
        let { email, password } = event.target.elements;

        try {
            // await doSignInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
            alert(error);
        }
    };

    // async function handleSubmit(event) {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     } else {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         setValidated(true);
    //         let username = form.elements.loginUser.value;
    //         let password = form.elements.loginPass.value;
    //         try {
    //             // await doSignInWithEmailAndPassword(username, password);
    //         } catch (error) {
    //             alert(error);
    //         }
    //     }
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        const { loginUser, loginPass } = form.elements;

        axios
            .post("localhost:5000/user/signin", function (req, res) {
                req.header("Access-Control-Allow-Origin", "true");
                req.body({ username: loginUser.value, password: loginPass.value });
                req.send();
            })
            .then(function (response) {
                navigate(`/${response.data}`);
            })
            .catch(function (response) {
                alert("Incorrect username or password!");
                // navigate(`/login`);
            });

        setValidated(true);
    };

    if (currentUser) {
        return <Navigate to="/" />;
    }
    if (loading) {
        return (
            <div>
                <h2>Loading....</h2>
            </div>
        );
    } else {
        return (
            <div className="">
                <Navigation />
                <Card className="loginsignupcard loginboxshadow mt-3">
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Card.Subtitle>
                            <Link className="signuponloginpagelink mb-4" to="/signup">
                                Don't have an account? Click here to sign up!
                            </Link>
                        </Card.Subtitle>
                        <Form className="p-3 text-start" noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="loginUser">
                                <Form.Label className="form-label">Username</Form.Label>
                                <Form.Control name="loginUser" type="text" placeholder="Username" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="loginPass">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="loginPass" type="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="save-button">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
};

export default Login;
