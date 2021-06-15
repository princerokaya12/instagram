import { useState, useContext, useEffect,  } from "react";

import { useHistory } from "react-router"
import { Link } from "react-router-dom";
import FirebaseContext from "../firebase/firebase";


export default function SignUp() {


    const  [username,setUsername] = useState('');
    const  [fullName, setfullName]= useState('');

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const handleSignUp = async (event) => {
        event.preventDefault();
        // try {
            

        // } catch (error) {
           
        // }
     };

    useEffect(() => {
        document.title = 'Sign Up Pages';
    }, [])


    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src=" /images/instagramlogin.jpg" alt="instagram app" />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded ">
                <h1 className="flex justify-center w-full">
                    <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4"/>
                </h1>
                {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                <form onSubmit={handleSignUp} method="POST">
                <input
                    aria-label="User Name"
                    type="text"
                    placeholder="User Name"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                    onChange={({target})=> setUsername(target.value)}
                    value={username }
                      />
                      <input
                    aria-label="Full Name"
                    type="text"
                    placeholder="full name"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                    onChange={({target})=> setfullName(target.value)}
                    value={fullName }

                      />
                    <input
                    aria-label="Email address"
                    type="text"
                    placeholder="Email Address"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                    onChange={({target})=> setEmailAddress(target.value)}
                    value={emailAddress }

                      />
                      <input
                    aria-label="Your Password"
                    type="password"
                    placeholder="Password"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                    onChange={({target})=> setPassword(target.value)}
                    value={password }

                      />
                      <button
                      disabled={isInvalid}  
                      type="submit"
                      className={`bg-blue-medium text-white w-full rounded h-8 font-bold
                      ${isInvalid && 'opacity-50'}`} >
                         Sign Up
                          </button>
                </form>
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
                <p className="text-sm">have an account?{``}
                <Link to="/login" className="font-bold text-blue-medium">
                    Login 
                </Link>
                </p>
                </div>
            </div>
            
        </div>
    )
}
