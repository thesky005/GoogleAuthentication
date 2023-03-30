import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import styled from "styled-components";

const Login = () => {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

 /* const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };*/

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
     {/*
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr /> 
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>

        */}

    <Container>
        <LoginBox>
            <ImgLogo>
                <img src="images/logo.png" alt=""/>
            </ImgLogo>
            <h2>Welcome Back!</h2>
            <GoogleBtn>
                <GoogleButton
                className="g-btn"
                type="dark"
                onClick={handleGoogleSignIn}
            />
            <p>or</p>
            </GoogleBtn>
            <LoginwithEmail>
                <InputTextEmail>
                <i className="login__icon fas fa-user"></i>
                    <p>Email:</p><input type="text" placeholder="Enter your email" />
                    <p>Password:</p><input type="text" placeholder="Password" />
                    
                </InputTextEmail>
            </LoginwithEmail>
        </LoginBox>
    </Container>

      
    </>
  );
};

export default Login;

const Container =styled.div`
    //background:#00BFFF;
    //display: flex;
    
`
const LoginBox = styled.div`
    //background:#00BFFF;
    background-image: url("images/images.jpg");
    background-repeat:no-repeat;
    background-size: cover;
    min-height: 600px;
    border-radius: 10px;

    h2{
        margin: 5px;
        padding-top: 10px;
        display: flex;
        justify-content: center;
    }
`

const ImgLogo = styled.div`
   min-height: 10px;
   margin:5px;
   padding-top: 5px;
   display: flex;
    justify-content: center;
    align-items: center;
   img{
        margin: 5px;
        padding: 5px;
        border-radius: 50%;
    }

`
const GoogleBtn = styled.div`
    min-width:200px;
    margin: 20px;
    padding: 10px;
    p{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const LoginwithEmail = styled.div`

`
const InputTextEmail = styled.div`
    //display: flex;
    margin: 10px;

    input{
        /* margin: 16px;
        height:20px;
        width: 300px; */
        border: none;
        border-bottom: 2px solid #D1D1D4;
        background: none;
        padding: 10px;
        padding-left: 24px;
        font-weight: 700;
        width: 75%;
        transition: .2s;
    }
    
`