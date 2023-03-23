import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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
    // const { currentUser } = useContext(AuthContext);
    const currentUser = null;
    return <div>{currentUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
};

const NavigationNonAuth = () => {
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
        <Navbar variant="light" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    {/* <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" /> */}
                    <CardText size={40} /> FlashCardz
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto container-fluid">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login" className="ms-auto">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const NavigationAuth = () => {
    return (
        <div className="w-100">
            <Link id="homeTab" className="navLink" to="/">
                Home
            </Link>
            <Link id="submitTab" className="navLink" to="/submit">
                Submit
            </Link>
            <Link id="DisplayTab" className="navLink" to="/display">
                Display
            </Link>
            <Link id="docsTab" className="navLink" to="/docs">
                Docs
            </Link>
            <Link id="aboutTab" className="navLink" to="/about">
                About
            </Link>
            <Link id="logoutTab" className="navLink" to="/logout">
                Logout
            </Link>
        </div>
    );
};

export default Navigation;
