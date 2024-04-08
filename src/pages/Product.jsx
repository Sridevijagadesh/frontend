import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import{useParams} from 'react-router-dom'
import Breadcrum from '../component/Breadcrums/Breadcrum'
import ProductDisplay from '../component/ProductDisplay/ProductDisplay'
import Description from '../component/Description/Description'
// import ProductDisplay from '../component/ProductDisplay/ProductDisplay'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const { productId } = useParams();
  
  console.log( 'i am product ' , productId)
  const product = all_product.find((e)=> e.id === Number( productId ));

  console.log(product)
  return (
    <div>
 <Breadcrum product ={product}/>
 <ProductDisplay product = {product} />
 <Description/>
       
    </div>
  )
}

export default Product
