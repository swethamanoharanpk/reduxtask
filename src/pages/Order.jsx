import React from 'react'
import {useNavigate} from 'react-router-dom'

function Order() {


  const navigate = useNavigate()
  setTimeout(()=>{
    navigate('/')
  },3000)



  return (
    <div>
    <h2>Your Order Is Successfull </h2>
    </div>
  )
}

export default Order