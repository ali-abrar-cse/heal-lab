import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const auth = getAuth();

const Register = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/";
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [dName, setDName] = useState("");
    const { error, signInWithGoogle, signInWithGithub, setUser, setError, setIsLoading } = useAuth();
    const envelop = <FontAwesomeIcon icon={faEnvelope} />
    const key = <FontAwesomeIcon icon={faKey} />
    const google = <FontAwesomeIcon icon={faGoogle} />
    const github = <FontAwesomeIcon icon={faGithub} />
    const name = <FontAwesomeIcon icon={faUser}/>

    // taking inputs 
    const handleNameInput = (e) =>{
        const userName = e.target.value;
        setDName(userName);
    }
    const handleEmailInput = (e) =>{
        const userEmail = e.target.value;
        console.log(userEmail);
        // validating email
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail) ? 
        setEmail(userEmail) : alert("Enter valid email please...");
    }
    const handlePasswordInput = (e) =>{
        // validating password
        const userPassword = e.target.value;
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(userPassword) ? 
        setPass(userPassword) : alert("Password must contain at least 6 charecters with at least one uppercase Charecter and a number.");
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log("clicked", dName, email, pass);
        // calling email pass sign in function 
        handleEmailPassSignin();
    }

    // google sign in handling
    const handleGoogleLogin = () =>{
        signInWithGoogle()
        .then((res) =>{
            setUser(res.user)
            history.push(redirect);
        }).catch(e =>{
            setError(e.message);
            alert(error);
        })
        .finally(() => setIsLoading(false))
    }

    // github sign in handling
    const handleGithubLogin = () =>{
        signInWithGithub()
        .then((res) =>{
            setUser(res.user);
            history.push("/");
            if(!res.user?.emailVerified){
                verifyUser(res.user)
            }
        }).catch(e =>{
            setError(e.message);
            alert(error);
        })
        .finally(() => setIsLoading(false))
    }

    // handle email pass sign in
    const handleEmailPassSignin = () =>{
        // checking whether user inputed data or not
        if(!pass){
            return alert("Password must contain at least 6 charecters with at least one uppercase Charecter and a number.");
        }
        if(!email){
            return alert("Enter valid email please...");
        }
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, pass)
        .then((res) => {
            setUser(res.user);
            history.push("/");
            verifyUser(res.user);
            // alert(`welcome ${res?.user?.email}.`);
        })
        .catch((e) => {
            setError(e.message);
            alert(error);
        })
        .finally(() => setIsLoading(false))
    }
    
    // verifying user by sending mail
    const verifyUser = (user) =>{
        console.log(user);
        sendEmailVerification(user)
        .then(() => {
            alert(`${user?.email} Thank you for registering. Check your email and verify to log in then reload the page.`)
        });
    }
    

    return (<div className="container w-75 w-lg-50 mx-auto shadow rounded mt-5 p-4">
        <div className="text-center">
            <h2 className="text-primary">Hello!</h2>
            <p>Register Yourself!</p>
        </div>
        <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-12">
                <label className="form-label" htmlFor="autoSizingName">Name</label>
                    <div className="input-group">
                    <div className="input-group-text text-primary rounded-pill">{name}</div>
                    <input required onBlur={handleNameInput} type="text" className="form-control rounded-pill" id="autoSizingName" placeholder="Enter you name"/>
                </div>
            </div>
            <div className="col-md-12">
                <label className="form-label" htmlFor="autoSizing">Email</label>
                    <div className="input-group">
                    <div className="input-group-text text-primary rounded-pill">{envelop}</div>
                    <input required onBlur={handleEmailInput} type="text" className="form-control rounded-pill" id="autoSizing" placeholder="Enter you email"/>
                </div>
            </div>
            <div className="col-md-12">
                <label className="form-label" htmlFor="auto">Password</label>
                    <div className="input-group">
                    <div className="input-group-text text-primary rounded-pill">{key}</div>
                    <input required onBlur={handlePasswordInput} type="password" className="form-control rounded-pill" id="auto" placeholder="Enter you password"/>
                </div>
            </div>
            <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary">Register</button>
            </div>
        </form>
        <div className="text-center mt-4">
            <p className="text-success fw-bold">Or Signin Using</p>
            <div className="d-flex justify-content-center p-2 w-50 mx-auto">
                <button onClick={handleGoogleLogin} className="btn btn-danger rounded-circle">{google}</button>
                <span className="text-white">or</span>
                <button onClick={handleGithubLogin} className="btn btn-dark text-white rounded-circle">{github}</button>
            </div>
        </div>
        <div className="text-center">
            <p>Already Registered? <Link to="/login">Login here</Link></p>
        </div>
    </div>
    );
};

export default Register;