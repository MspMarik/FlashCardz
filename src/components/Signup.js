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

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     } else {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         setValidated(true);
    // let pathtopic = "";
    // let formData = new FormData();
    // let file = form.elements.signupPic.files[0]
    // let d = new Date();
    // let filename = d.getMonth().toString() + "-" + d.getDay().toString() + "-" + d.getFullYear().toString() + "_" + file.name;
    // let gender = form.elements.signupGender.value;
    // if (gender == "Goose (Other)") {
    //     gender = form.elements.signupOtherGenderText.value;
    // }
    // let mPref = form.elements.signupPref[0];
    // let fPref = form.elements.signupPref[1];
    // let oPref = form.elements.signupPref[2];
    // let aPref = form.elements.signupPref[3];
    // let pref = [];
    // if (aPref.checked) {
    //     pref.push(aPref.value);
    // } else {
    //     if (mPref.checked) {
    //         pref.push(mPref.value);
    //     }
    //     if (fPref.checked) {
    //         pref.push(fPref.value);
    //     }
    //     if (oPref.checked) {
    //         pref.push(oPref.value);
    //     }
    // }
    // let data = {
    //     signupName: form.elements.signupName.value,
    //         signupAge: form.elements.signupAge.value,
    //         signupGender: gender,
    //         signupEmail: form.elements.signupEmail.value,
    //         pic: pathtopic,
    //         signupUser: form.elements.signupUser.value,
    //         signupPass: form.elements.signupPass.value,
    //         signupBio: form.elements.signupBio.value,
    //         signupLikes: form.elements.signupLikes.value,
    //         signupDislikes: form.elements.signupDislikes.value,
    //         signupStatus: form.elements.signupStatus.value,
    //         signupPref: pref,
    // }
    // formData.append("pic", form.elements.signupPic.value);
    // formData.append("signupName", form.elements.signupName.value);
    // formData.append("signupAge", form.elements.signupAge.value);
    // formData.append("signupGender", gender);
    // formData.append("signupEmail", form.elements.signupEmail.value);
    // formData.append("signupUser", form.elements.signupUser.value);
    // formData.append("signupPass", form.elements.signupPass.value);
    // formData.append("signupBio", form.elements.signupBio.value);
    // formData.append("signupLikes", form.elements.signupLikes.value);
    // formData.append("signupDislikes", form.elements.signupDislikes.value);
    // formData.append("signupStatus", form.elements.signupStatus.value);
    // formData.append("signupPref", pref);
    // console.log(formData);
    // let data = await axios
    //     .post("http://localhost:3001/date/", formData, {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     })
    //     .catch(function (error) {
    //         console.log(error.toJSON());
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //         mongoId = response.data._id;
    //     });
    // let data = null;
    // console.log(data);

    // try {
    //     //   await doCreateUserWithEmailAndPassword(
    //     //     form.elements.signupEmail.value,
    //     //     form.elements.signupPass.value,
    //     //     mongoId
    //     //   );
    // } catch (error) {
    //     alert(error);
    // }
    //     }
    // };

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
                        <h3>Basic Information</h3>
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

                        <hr />
                        <h3>Experience</h3>
                        <p>You can input up to your last three positions</p>
                        <h4>Position 1</h4>
                        <Form.Group className="mb-3" controlId="signupJob1Pos">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="signupJob1Pos" placeholder="i.e. Software Engineer" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="signupJob1Ind">
                            <Form.Label>Industry</Form.Label>
                            <Form.Control type="text" name="signupJob1Ind" placeholder="i.e. Healthcare" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="signupJob1From">
                            <Form.Label>From</Form.Label>
                            <Form.Control type="date" name="signupJob1From" placeholder="MM/DD/YYYY" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="signupJob1To">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="date" name="signupJob1To" placeholder="MM/DD/YYYY" required />
                        </Form.Group>
                        {pos2}
                        {pos3}

                        <span>
                            <Button id="rmPos" className="me-2" onClick={rmPosition} variant="danger" hidden={rmPosBtnHidden}>
                                <TrashFill />
                            </Button>
                            <Button id="addPos" onClick={addPosition} hidden={addPosBtnHidden}>
                                Add Position
                            </Button>
                        </span>

                        {/* <h4>Position 2</h4>
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
                        </Form.Group> */}

                        {/* <h4>Position 3</h4>
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
                    </Form.Group> */}

                        <hr />
                        <h3>Education</h3>
                        <p>Latest education obtained</p>
                        <Form.Group className="mb-3" controlId="signupEduType">
                            <Form.Label>Degree Type</Form.Label>
                            <Form.Select name="signupEduType" required>
                                <option value={""}>-- Please Select --</option>
                                <option value={"High School"}>High School</option>
                                <option value={"Some College"}>Some College</option>
                                <option value={"Bachelor's"}>Bachelor's</option>
                                <option value={"Master's"}>Master's</option>
                                <option value={"PHD"}>PHD</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="signupEduArea">
                            <Form.Label>Area of Study</Form.Label>
                            <Form.Control type="text" name="signupEduArea" placeholder="i.e. Computer Science" required />
                            <Form.Text>If no area of study, please input "N/A"</Form.Text>
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
