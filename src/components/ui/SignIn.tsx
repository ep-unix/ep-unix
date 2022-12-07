import React, { useState } from "react";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { error } from "console";
import './../../index.css';
import { useNavigate, Link } from "react-router-dom";

import Google from "@mui/icons-material/Google";
import HorizontalRule from '@mui/icons-material/HorizontalRule';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    var error_message: string = '';

    const signIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);  
            error_message = "Incorrect email/password combination";        
        })
    };

    function onSignInFail() {

    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(onGoHome);
        
    }

    function onGoHome() {
        navigate('/');
    }
    
    return (
        <div className="container mx-auto p-4">
            <div className="w-full lg:w-1/3 mx-auto my-12 bg-background_light p-8 rounded drop-shadow-lg">
                <h1 className="text-lg font-bold">Sign In</h1>            
                <form className='flex flex-col mt-4' onSubmit={signIn}>                    
                    <input className="transition-all hover:scale-105 focus:scale-105 first-letter:shadow px-4 py-3 mt-4 w-full rounded-md bg-background border-transparent focus:border-primary focus:ring-0 text-sm" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input className="transition-all hover:scale-105 focus:scale-105 shadow px-4 py-3 mt-4 w-full rounded-md bg-background border-transparent focus:border-primary focus:ring-0 text-sm" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <p className="text-error mt-2 font-semibold scale-0">{error_message}</p>
                    <button className=" hover:scale-105 active:scale-100 shadow hover:shadow-md mt-4 bg-primary hover:bg-primary_light text-white font-semibold py-2 px-4 rounded active:bg-primary_dark transition-all" type="submit">Sign in</button>

                    <div className="mt-4 text-sm">or</div>
                    
                    <Link className=" hover:scale-105 active:scale-100 shadow hover:shadow-md mt-4 bg-primary hover:bg-primary_light text-white font-semibold py-2 px-4 rounded active:bg-primary_dark transition-all" to='../register'><button>Create an account</button></Link>
                    <button className=" hover:scale-105 active:scale-100 shadow hover:shadow-md mt-4 bg-error hover:bg-error_light text-white font-semibold py-2 px-4 rounded active:bg-error_dark transition-all" onClick={onGoHome} >Go back</button>

                </form>
            </div>
        </div>
    )
}

export default SignIn;
