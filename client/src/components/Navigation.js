import { BrowserRouter as Router, Route, Link, Routes, useParams } from "react-router-dom";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import logo from "../career_compass_logo.png";
import { CardText } from "react-bootstrap-icons";
// import { AuthContext } from "../firebase/Auth";
// import SignOutButton from './SignOut';
import "../App.css";

const Navigation = () => {
    const { id } = useParams();
    // return (
    //     <div className="w-100">
    //         <Link id="homeTab" className="navLink" to="/">
    //             Home
    //         </Link>
    //         <Link id="submitTab" className="navLink" to="/submit">
    //             Submit
    //         </Link>
    //         <Link id="DisplayTab" className="navLink" to="/heatmap">
    //             Heat Map
    //         </Link>
    //         <Link id="docsTab" className="navLink" to="/docs">
    //             Docs
    //         </Link>
    //         <Link id="aboutTab" className="navLink" to="/about">
    //             About
    //         </Link>
    //         <span className="loginsignup">
    //             <Link id="loginTab" className="navLink loginLink" to="/login">
    //                 Login
    //             </Link>
    //             <span>/</span>
    //             <Link id="signupTab" className="navLink signupLink" to="/signup">
    //                 Signup
    //             </Link>
    //         </span>
    //     </div>
    // );
    return (
        <Navbar variant="light" expand="md" className="mb-5">
            <Container>
                <Navbar.Brand as={Link} to={`/${id ? id : ""}`}>
                    {/* <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" /> */}
                    <CardText size={40} /> FlashCardz
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto container-fluid">
                        <Nav.Link as={Link} to={`/${id ? id : ""}`}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to={id ? "/" : "/login"} className="ms-auto">
                            {id ? "Logout" : "Login"}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
