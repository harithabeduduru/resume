import React from 'react'

import '../App.css'
const RegisterPage = () => {
  return (
    <div className="App" >
           
            <form action="/home">
                <h2>CampusHQ</h2>
                <br></br>
                <h2><b>Login</b></h2>
                <br></br>
            
                
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="email" required />
                </p><br />
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p><br />
                
                
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p><br />

                <span>Don't have an account?  <a href="Register" target="_blank" rel="noopener noreferrer">Register</a></span>
            </form>
            
        </div>
  )
}

export default RegisterPage
