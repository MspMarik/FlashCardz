import React, { useContext, useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { TrashFill } from "react-bootstrap-icons";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";
// import {doCreateUserWithEmailAndPassword} from '../firebase/FirebaseFunctions';
// import {AuthContext} from '../firebase/Auth';
// import axios from "axios";

const Signup = () => {
    // const {currentUser} = useContext(AuthContext);
    const currentUser = null;
    const [loading, setLoading] = useState(true);
    const [validated, setValidated] = useState(false);
    let mongoId;
    const [numPos, setNumPos] = useState(1);
    const [pos2, setPos2] = useState(null);
    const [pos3, setPos3] = useState(null);
    const [addPosBtnHidden, setAddPosBtnHidden] = useState(false);
    const [rmPosBtnHidden, setRmPosBtnHidden] = useState(true);

    useEffect(() => {
        setLoading(true);
        setLoading(false);
    }, []);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        //upload.single('signupPic');

        // let {data} = axios.post("http://localhost:3001/date/",
        //     {
        // signupName:,
        // signupAge:,
        // signupGender:,
        // signupEmail:,
        // pic:,
        // signupUser:,
        // signupPass:,
        // signupBio:,
        // signupLikes:,
        // signupDisikes:,
        // signupStatus:,
        // signupPref:,

        //     }
        //     );
        const { signupName, signupEmail, signupPassword } = e.target.elements;

        try {
            // await doCreateUserWithEmailAndPassword(signupEmail.value, signupPassword.value, signupName);
        } catch (error) {
            alert(error);
        }
    };

    const addPosition = () => {
        let num = numPos + 1;
        setNumPos(num);
        if (num == 2) {
            setPos2(
                <React.Fragment>
                    <h4>Position 2</h4>
                    <Form.Group className="mb-3" controlId="signupJob2Pos">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="signupJob2Pos" placeholder="i.e. Software Engineer" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signupJob2Ind">
                        <Form.Label>Industry</Form.Label>
                        <Form.Control type="text" name="signupJob2Ind" placeholder="i.e. Healthcare" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signupJob2From">
                        <Form.Label>From</Form.Label>
                        <Form.Control type="date" name="signupJob2From" placeholder="MM/DD/YYYY" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signupJob2To">
                        <Form.Label>To</Form.Label>
                        <Form.Control type="date" name="signupJob2To" placeholder="MM/DD/YYYY" required />
                    </Form.Group>
                </React.Fragment>
            );
            setRmPosBtnHidden(false);
        } else if (num == 3) {
            setPos3(
                <React.Fragment>
                    <h4>Position 3</h4>
                    <Form.Group className="mb-3" controlId="signupJob3Pos">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="signupJob3Pos" placeholder="i.e. Software Engineer" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signupJob3Ind">
                        <Form.Label>Industry</Form.Label>
                        <Form.Control type="text" name="signupJob3Ind" placeholder="i.e. Healthcare" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signupJob3From">
                        <Form.Label>From</Form.Label>
                        <Form.Control type="date" name="signupJob3From" placeholder="MM/DD/YYYY" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signupJob3To">
                        <Form.Label>To</Form.Label>
                        <Form.Control type="date" name="signupJob3To" placeholder="MM/DD/YYYY" required />
                    </Form.Group>
                </React.Fragment>
            );
            setAddPosBtnHidden(true);
        }
    };

    const rmPosition = () => {
        let num = numPos - 1;
        setNumPos(num);
        if (num == 1) {
            setPos2(null);
            setRmPosBtnHidden(true);
        } else if (num == 2) {
            setPos3(null);
            setAddPosBtnHidden(false);
        }
    };

    if (currentUser) {
        return <Navigate to="/" />;
    }

    // function mGender() {
    //     document.getElementById("mGender").setAttribute("required", "");
    //     document.getElementById("oGender").removeAttribute("required");
    //     document.getElementById("fGender").removeAttribute("required");
    //     document.getElementById("oGenderText").setAttribute("disabled", "");
    //     document.getElementById("oGenderText").removeAttribute("required");
    // }

    if (loading) {
        return (
            <div>
                <h2>Loading....</h2>
            </div>
        );
    } else {
        return (
            // <div className="container align-self-center mb-5 card-container">
            <Card className="loginsignupcard signupboxshadow mt-3 mb-5">
                <Card.Body>
                    <Card.Title>Sign Up</Card.Title>
                    <Card.Subtitle>
                        <Link className="signuponloginpagelink mb-4" to="/login">
                            Already have an account? Click here to login!
                        </Link>
                    </Card.Subtitle>
                    <Form className="p-3 text-start" noValidate validated={validated} onSubmit={handleSubmit}>
                        {/* <h3>Basic Information</h3> */}
                        <Form.Group className="mb-3" controlId="signupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="signupName" placeholder="Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="signupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="signupEmail" placeholder="example@example.com" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="signupUser">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="signupUser" placeholder="Username" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="signupPass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="signupPass" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="signupRePass">
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control type="password" name="signupRePass" placeholder="Retype Password" required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="save-button">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            // </div>
        );
    }
};

export default Signup;
