import React, { useState, useEffect } from 'react';


import firebase, { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child, orderByChild, limitToLast, onValue } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, Auth, UserInfo} from "firebase/auth";

import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/ui/Home';
import SignIn from './components/ui/SignIn';
import SignUp from './components/ui/SignUp';
import AuthDetails from './components/auth/AuthDetails';

import Navbar from './components/ui/Navbar';

function App() {
  return (    
      <body className='bg-background text-white text-center m-0 p-0 box-border h-fit'>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="signin" element={ <SignIn />} />
            <Route path="register" element={ <SignUp />} />
          </Routes>
        </div>
      </body>
  );
};

export default App;
