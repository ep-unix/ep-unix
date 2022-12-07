import React, { useState } from "react";
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './../../index.css';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/');
        }).catch((error) => {
            console.log(error);            
        })
    };   

    function onGoBack() {
        navigate('/signin');
    }

    return (
        <div className="container mx-auto p-4">
            <div className="w-full lg:w-1/3 mx-auto my-12 bg-background_light p-8 rounded drop-shadow-lg">
                <h1 className="text-lg font-bold">Create an account</h1>
                <form className='flex flex-col mt-4' onSubmit={signUp}>
                    <input className="transition-all hover:scale-105 focus:scale-105 first-letter:shadow px-4 py-3 mt-4 w-full rounded-md bg-background border-transparent focus:border-primary focus:ring-0 text-sm" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input className="transition-all hover:scale-105 focus:scale-105 first-letter:shadow px-4 py-3 mt-4 w-full rounded-md bg-background border-transparent focus:border-primary focus:ring-0 text-sm" type='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button className=" hover:scale-105 active:scale-100 shadow hover:shadow-md mt-4 bg-primary hover:bg-primary_light text-white font-semibold py-2 px-4 rounded active:bg-primary_dark transition-all" type="submit">Sign up</button>
                    <button className=" hover:scale-105 active:scale-100 shadow hover:shadow-md mt-4 bg-error hover:bg-error_light text-white font-semibold py-2 px-4 rounded active:bg-error_dark transition-all" onClick={onGoBack} >Go back</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
