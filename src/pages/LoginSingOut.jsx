import React from 'react'
import './CSS/loginsignup.css'

const LoginSingOut = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='your name'></input>
          <input type='email' placeholder='your email'></input>
          <input type='password' placeholder='password'></input>
        </div>
        <button>continue</button>
        <div className="loginsignup-login">Alredy have an account? <span>Login here</span></div>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continuing i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingOut
