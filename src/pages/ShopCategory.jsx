import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/shopContext'
import dropdown from '../component/Assets/dropdown_icon.png'
import Item from '../component/Item/Item'
const ShopCategory = (props) => {
  const {banner , category } = props
  const {all_product} = useContext(ShopContext)
  console.log(all_product)
  return (
    <div className='Shop-category'>
      <img  className= "shopcategory-banner"src={banner} alt=''></img>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown} alt=''></img>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item , i)=>{
          if(category === item.category){
            return <Item key = {i} id={item.id} name={item.name} image ={item.image} new_price ={item.new_price} old_price = {item.old_price} />
          }else{
            return null
          }
        
        })}
      </div>
      <div className="shopcategory-loadmore">
            Explore More
          </div>

      
    </div>
  )
}

export default ShopCategory
