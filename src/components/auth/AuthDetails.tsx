import React, { useState, useEffect } from 'react';
import firebase, { initializeApp } from 'firebase/app';
import { onAuthStateChanged, UserInfo, signOut, updateCurrentUser } from 'firebase/auth';
import { auth } from '../../firebase';
import { userInfo } from 'os';


const AuthDetails = () => {
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

  const userSignOut = () => {
    signOut(auth).then(() => {
        console.log('Signed out success')
    }).catch(error => console.log(error));
  }

  return (
    <div className="mx-auto p-4">
       <div className='w-full lg:w-1/3 bg-primary rounded p-4'>          
         {currentUser ? <p>{`Signed in as: ${currentUser.email}`}</p> : <p>Signed Out</p>}
         <button className=" hover:scale-105 active:scale-100 shadow hover:shadow-md mt-4 bg-error hover:bg-error_light text-white font-semibold py-2 px-4 rounded active:bg-error_dark transition-all" onClick={userSignOut}>Sign Out</button>
       </div>
     </div>
  )
  }
  
  
  export default AuthDetails;
