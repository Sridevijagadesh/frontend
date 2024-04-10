import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'
import remove from '../Assets/cart_cross_icon.png'
import './cartitem.css'
const Cartitems = () => {
  const {all_product , cartItem  , removrFromCart , addToCart , getTotalCartAmout} =useContext(ShopContext)
  return (
    <div className='cartitem'>
      <div className="cartitems-format-main">
        <p>Produts</p>
        <p>Title</p>
        <p>price</p>
        <p>quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
     
     {all_product.map((e)=>{
      if(cartItem[e.id]>0){
        return<>
         <div className="cartItem-format cartitems-format-main">
  <img src={e.image} alt='' className='CartImage'/>
  <p>{e.name}</p>
  <p>{e.new_price}</p>


  <button className=' '>{cartItem[e.id]}
  <button onClick={()=>{addToCart(e.id)}}>+</button>
  </button>

  <p>{e.new_price * cartItem[e.id]}</p>
  <img src={remove}  className ='remove'alt='' onClick={()=>{removrFromCart(e.id)}}/>
  </div>
  <hr/>
        </>
      }
      return null;
     })}
     <div className="cartitem-down">
      <div className="cartitem-total">
        <h1>cart total</h1>
        <div>
          <div className="cartitem-total-item">
            <p>subtotal</p>
            <p>${getTotalCartAmout()}</p>
          </div>
          <hr/>
          <div className="cartitem-total-item">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr/>
          <div className="cartitem-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmout()}</h3>
          </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cartitems-promo">
        <p>If you have promo code , enter here</p>
        <div className="cartitem-promobox">
          <input type='text' placeholder='promo code'/>
          <button>submit</button>
        </div>
      </div>
     </div>
      </div>
    
  )
}

export default Cartitems
