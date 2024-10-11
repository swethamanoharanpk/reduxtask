import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useDispatch, useSelector } from 'react-redux'
import { addItem, addToCart } from '../Redux/Productslice'
import { Link} from 'react-router-dom';
import Badge from '@mui/material/Badge';


const Product = () => {

  const cartCount = useSelector((state)=>state.productInfo.cartItem)
  console.log(cartCount.length)


  const dispatch = useDispatch()
  const [item, setItem] = useState([])

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((res) => {
      setItem(res.data.categories.slice(0, 12))
      dispatch(addItem(res.data))
    })

  }, [])

  function toCart(items){
    dispatch(addToCart(items))
    
  }

  return (
    <div>
      <Navbar bg="white" data-bs-theme="white">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
          
          <Badge badgeContent={cartCount.length} color="success"><Link to={'/cart'}><ShoppingBagIcon /></Link></Badge>

          </Nav>
        </Container>
      </Navbar>


      {item.map((li) => {
        return (


          <Card>
            <div className='container'>
              <div className='row'>
                <div className='col-md-3'>
                  <Card.Img variant="top" src={li.strCategoryThumb} />
                  <Card.Body>

                    <Card.Title>{li.strCategory}</Card.Title>
                    <Card.Text>
                      <button onClick={()=>toCart(li)}>AddToCart</button>
                      <button><Link to={'/order'}>Buy Now</Link></button>
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </div>


          </Card>



        )
      }


      )}


    </div >
  )
}

export default Product