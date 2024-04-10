import React, { createContext, useState } from "react";
import all_product from '../component/Assets/all_product';

export const ShopContext = createContext(null)

const getDefaultCart = ()=>{
  let cart ={}
  for(let i = 0;  i<all_product.length +1; i++){
    cart[i] = 0;
     console.log(cart[i])
  }
  return cart

 }

const ShopContextprovider = (props)=>{
  const [cartItem , setCartItem] = useState(getDefaultCart())
  
    
   const addToCart = (itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]: prev[itemId]+1}))
    console.log( cartItem)
   }
   const removrFromCart = (itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]: prev[itemId]-1}))
   }

 const getTotalCartAmout  = ()=>{
  let totalAmount = 0;
  for(const item in cartItem){
    if(cartItem[item]>0){
      let iteminfo = all_product.find((product)=>product.id === Number(item))
      totalAmount += iteminfo.new_price* cartItem[item]
    }
    return totalAmount
  }
 }
const getTotalCart  =()=>{
  let res = 0;
  for(const item in cartItem){
    if(cartItem[item]>0){
      res += cartItem[item]
    }
    return res
  }
}
   const contextValue = {all_product , cartItem , addToCart , removrFromCart ,getTotalCartAmout , getTotalCart}
  
  
  
  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextprovider