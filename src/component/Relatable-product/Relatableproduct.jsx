import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import './Relatable.css'
const Relatableproduct = () => {
  return (
    <div className='relatable'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatable-item">
        {data_product.map((item, i)=>{
          return <Item key={i} id={item.id} name ={item.name} image = {item.image} />
        })}
      </div>
    </div>
  )
}

export default Relatableproduct
