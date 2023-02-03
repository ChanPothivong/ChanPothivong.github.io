import React from "react";
// import "./UserData"

import { useState, useEffect, useRef } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./login.css"
import Header from "./Header";
import Footer from "./Footer";





// Kind of username and password
const User_Name = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const User_Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6-16}$/;

const Registration = () => {


    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // const history = useHistory()

    // async function handleSubmit(e) {
    //   e.preventDefault()

    //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //     return setError("Passwords do not match")
    //   }

    //   try {
    //     setError("")
    //     setLoading(true)
    //     await signup(userNameRef.current.value, passwordRef.current.value)
    //     history.push("/")
    //   } catch {
    //     setError("Failed to create an account")
    //   }

    //   setLoading(false)
    // }



    return (
        <>
            <Header/>
            <div className="registration">
            <h2> Registration</h2>
            <br />

            <FloatingLabel label="Email">
                <Form.Control
                    type="email"
                    id="username"
                    placeholder="email"
                    autoComplete="off"
                    ref={emailRef}
                />
            </FloatingLabel><br/>
            <FloatingLabel label="Password" >
                <Form.Control
                    type="password"
                    id="pwd"
                    placeholder="name@example.com"
                    ref={passwordRef}
                    required
                />
            </FloatingLabel><br/>
            <FloatingLabel label="Confirm Password" >
                <Form.Control
                    type="password"
                    id="confirmpwd"
                    placeholder="confirmpassoword"
                    ref={passwordConfirmRef}
                />
            </FloatingLabel><br/>

            <Button variant="outline-primary" >Sign UP</Button>{" "}
            <Button variant="outline-primary" href="/login">
                Login
            </Button>{" "}
            <br />
            </div>
            <Footer/>
        </>
    )
};

export default Registration;

// import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from '../Context/AuthContext'
// import { Link, useHistory } from "react-router-dom"

// export default function Signup() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { signup } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const history = useHistory()

//   async function handleSubmit(e) {
//     e.preventDefault()

//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match")
//     }

//     try {
//       setError("")
//       setLoading(true)
//       await signup(emailRef.current.value, passwordRef.current.value)
//       history.push("/")
//     } catch {
//       setError("Failed to create an account")
//     }

//     setLoading(false)
//   }

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Sign Up</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" ref={passwordRef} required />
//             </Form.Group>
//             <Form.Group id="password-confirm">
//               <Form.Label>Password Confirmation</Form.Label>
//               <Form.Control type="password" ref={passwordConfirmRef} required />
//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit">
//               Sign Up
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Already have an account? <Link to="/login">Log In</Link>
//       </div>
//     </>
//   )
// }