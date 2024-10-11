import React from 'react'
import {useSelector} from 'react-redux'

function Cart() {
    const cartDetails = useSelector((event)=> event.productInfo.cartItem)
  return (
    <div>
    {cartDetails.map((list)=>{
        return(
            <li>
            <img src={list.strCategoryThumb} alt="" />
            <h5>{list.strCategory}</h5>
            </li>
            
        )
    })}
    </div>
  )
}

export default Cart