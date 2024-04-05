import React from 'react'
import './NewsLetters.css'
const NewsLetters = () => {
  return (
    <div className='newsLetters'>
      <h1>Get Exclusive offer On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your E-mail id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetters
