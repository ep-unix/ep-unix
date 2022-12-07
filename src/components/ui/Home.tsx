import React, { useEffect, useState} from 'react';
import { Link, HistoryRouterProps, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, UserInfo } from 'firebase/auth';
import { auth } from './../../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './../../index.css';

import AuthDetails from '../auth/AuthDetails';
import SignUp from './SignUp';

const Home = () => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {    
          if (user) {
            setCurrentUser(user);      
          }
          else {    
            setCurrentUser(null);
          }
        })    
      }, []);  

    
    function GuestView() {
        return (
            <div className='flex flex-col mt-4 text-center'>
              <p>You must sign in to access the chat features</p>
                <Link to='/signin' className="hover:scale-105 active:scale-100 shadow hover:shadow-md mt-4 bg-primary hover:bg-primary_light text-white font-semibold py-2 px-4 rounded active:bg-primary_dark transition-all">Sign in</Link>
            </div>            
        );
    }       

    return (
        <div className="container mx-auto p-4">
            <div className="w-full lg:w-1/3 mx-auto my-12 bg-background_light p-8 rounded drop-shadow hover:drop-shadow-">
                <h1 className="text-lg font-bold">Home</h1>
                {currentUser ? <AuthDetails /> : <GuestView />}  
            </div>   
        </div>
        
    );
}

export default Home;