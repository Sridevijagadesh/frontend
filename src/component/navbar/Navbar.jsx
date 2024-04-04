import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";

const Navbar = ()=>{
  const [menu ,setMenu] =useState('shop')
return(<>
<div className="navbar">
<div className="nav-log">
  <img src={logo} alt=""/>
  <p>Shopper</p>
</div>
<ul className="nav-menu">
  <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/' >Shop</Link> {menu==='shop'?<hr/>:<></>}  </li>
  <li onClick={()=>{setMenu('men')}}> <Link to ='/mens'  style={{textDecoration: 'none'}}>men</Link>  {menu==='men'?<hr/>:<></>}</li>
  <li onClick={()=>{setMenu('women')}}><Link to ='/womens'  style={{textDecoration: 'none'}}>women</Link>  {menu==='women'?<hr/>:<></>}</li>
  <li onClick={()=>{setMenu('kids')}}><Link to ='/kids'  style={{textDecoration: 'none'}}>kids</Link>  {menu==='kids'?<hr/>:<></>}</li>
</ul>
<div className="nav-login-cart">
  <button><Link to='/login'  style={{textDecoration: 'none', color:"black"}}>login</Link></button>
 <Link to='/cart'><img src={cart_icon}  alt=""></img></Link>  
  <div className="nav-cart-count">0</div>
</div>
</div>
</>)
}
export default Navbar