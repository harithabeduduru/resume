import React from 'react'

import '../App.css'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from 'https://www.gstaic.com/firebase/9.1.3/firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxRZie4F0b-sV-0ATmNC5lI1RIBRuUW2E",
  authDomain: "authentication-app-3a8e1.firebaseapp.com",
  databaseURL: "https://authentication-app-3a8e1-default-rtdb.firebaseio.com",
  projectId: "authentication-app-3a8e1",
  storageBucket: "authentication-app-3a8e1.appspot.com",
  messagingSenderId: "45685995377",
  appId: "1:45685995377:web:72071f6d56d80ce74c28d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const RegisterPage = () => {
  return (
    <div className="App" >
           
            <form action="/home">
                <h2>CampusHQ</h2>
                <br></br>
                <h5>Create your personal account</h5>
                <br></br>
            
                <div>
                    <label>Full Name</label><br/>
                    <input type="text" name="first_name" required />
                </div>
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <label>Contact Number</label><br/>
                    <input type="mobile" name="number" required />
                </p>
                <br />
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p><br />
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            
        </div>
        
  )
}

export default RegisterPage
