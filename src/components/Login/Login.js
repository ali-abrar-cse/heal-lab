import {  faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faKey, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword ,sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/home";
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const {signInWithGoogle,signInWithGithub, setUser, setError, error, setIsLoading} = useAuth();
    const envelop = <FontAwesomeIcon icon={faEnvelope} />
    const key = <FontAwesomeIcon icon={faKey} />
    const google = <FontAwesomeIcon icon={faGoogle} />
    const github = <FontAwesomeIcon icon={faGithub} />
    const signin = <FontAwesomeIcon icon={faSignInAlt} />

    const auth = getAuth();
    // google login funtion 
    const handleGoogleLogin = () =>{
        signInWithGoogle()
        .then((res) =>{
            setUser(res.user);
            console.log(res.user);
            history.push(redirect);
        }).catch(e =>{
            setError(e.message);
            alert(error);
        })
        .finally(() => setIsLoading(false))
    }

    // github log in function
    const handleGithubLogin = () =>{
        signInWithGithub()
        .then((res) =>{
            const user = res.user;
            console.log(user);
            if(user.emailVerified){
                setUser(user);
                history.push("/");
            }else{
                return alert("not registered. register first");
            }
        }).catch(e =>{
            setError(e.message);
            alert(error);
        })
        .finally(() => setIsLoading(false))
    }

    // input items by user loading
    const handleEmailInput = (e) =>{
        const userEmail = e.target.value;
        setEmail(userEmail);
    }
    const handlePasswordInput = (e) =>{
        const userPassword = e.target.value;
        setPass(userPassword);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("clicked", email, pass);
        handleEmailPassSignin();
    }
    
    // sign in using email password
    const handleEmailPassSignin = () =>{
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            setUser(userCredential.user);
            history.push(redirect);
        })
        .catch((e) => {
            setError(e.message)
            alert(error)
        });
    }

    // password reset or forget password
    const resetPassword = () =>{
        var resetMail = prompt("Please enter your email");
        sendPasswordResetEmail(auth, resetMail)
        .then(() => {
            alert(`Check inbox of ${email} and reset password.`)
        })
        .catch((e) => {
            setError(e.message);
        });
    }
    

    return (
        <div className="container w-75 w-lg-50 mx-auto shadow rounded mt-5 p-4">
            <div className="text-center">
                <h2 className="text-primary">Hello!</h2>
                <p>Signin to your account</p>
            </div>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-12">
                    <label className="form-label" htmlFor="autoSizing">Email</label>
                        <div className="input-group">
                        <div className="input-group-text text-primary rounded-pill">{envelop}</div>
                        <input onBlur={handleEmailInput} type="text" className="form-control rounded-pill" id="autoSizing" placeholder="Enter you email"/>
                    </div>
                </div>
                <div className="col-md-12">
                    <label className="form-label" htmlFor="auto">Password</label>
                        <div className="input-group">
                        <div className="input-group-text text-primary rounded-pill">{key}</div>
                        <input onBlur={handlePasswordInput} type="password" className="form-control rounded-pill" id="auto" placeholder="Enter you password"/>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary">Sign in {signin}</button>
                </div>
            </form>
            <div className="text-center">
                <span className="text-dark mt-1">Forgot Password? Click to Password Reset button. </span>
                <button className="btn btn-outline-primary" onClick={resetPassword}>Password Reset</button>
            </div>
            <div className="text-center mt-2">
                <p className="text-success fw-bold">Or Signin Using</p>
                <div className="d-flex justify-content-center p-2 w-50 mx-auto">
                    <button onClick={handleGoogleLogin} className="btn btn-danger rounded-circle">{google}</button>
                    <span className="text-white">or</span>
                    <button onClick={handleGithubLogin} className="btn btn-dark text-white rounded-circle">{github}</button>
                </div>
            </div>
            <div className="text-center">
                <p>Not Registered? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    );
}

export default Login;