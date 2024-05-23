import React, { useState } from 'react'
import './CSS/loginsignup.css'
import Axios from 'axios'

const LoginSingOut = () => {
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setpassword] = useState('')
  const myData = ()=>{
 Axios.post('http://localhost/8081/loginPage',{
  name:name,
  email:email,
  password:password
 })
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='your name' onChange={(e)=>{setName(e.target.value)}}></input>
          <input type='email' placeholder='your email'onChange={(e)=>{setEmail(e.target.value)}}></input>
          <input type='password' placeholder='password' onChange={(e)=>{setpassword(e.target.value)}}></input>
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
