import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory} from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";

export default function Login () {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");     
const history = useHistory();
const { firebase } = useContext(FirebaseContext);
const [error, setError] = useState("");

const isInvalid = password === "" || email === "";

const handleLogin = async (event) => {
event.preventDefault();

try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    history.push(ROUTES.DASHBOARD);
  } catch (error) { 
    setEmail('');
    setPassword('');
    setError(error.message);
  }
};

useEffect(() => {
    document.title = "Login • Instaglam";
}, []);

return (
 <div className="container flex mx-auto max-w-screen-md items-center h-screen">
    <div className="flex w-3/5">
            <img src ="/images/phones.jpg" alt="iphones with pictures on screens" className="max-w-md"/>
    </div>
    <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
        <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt ="instaglam logo" className="mt-2 w-6/12 mb-4"/>
        </h1>
        {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
            <form onSubmit={handleLogin} method="POST"> 
                <input 
                    aria-label="Enter your email address"
                    type="text"
                    value={email}
                    placeholder="Email address"
                    onChange={({ target }) => setEmail( target.value )}
                    className="text-small text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                />
                <input 
                    aria-label="Enter your password"
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={({ target }) => setPassword( target.value )}
                    className="text-small text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                />
                       <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold
            ${isInvalid && 'opacity-50'}`}
            >
              Login
            </button>
            </form>
    </div>
                <div className="flex justify-center items-center w-full bg-white p-4 border border-gray-primary rounded">
                    <p className="text-sm">Don't have an account?{` `}
                    <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-500">Sign up</Link>
                    </p>
                </div>
                </div>     
 </div>
)
}
