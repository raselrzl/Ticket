import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions';
import Box from '@mui/material/Box';


export default function Product({ product }) {
      const [quantity] = useState(1)
      const dispatch = useDispatch()
      function addtocart() {
            dispatch(addToCart(product, quantity))
      }
      return (

            <div data-aos='zoom-in' className='product-cart'>
                  <div className='ticket'>
                        <Box className='cart'>
                              <Box className='logo'>
                              </Box>
                              <Box className='ticket-number'>
                                    <span >Ticket Name: {product.name} </span>
                                    <span >Ticket: {product._id} </span>
                              </Box>
                              <h5>{product.price}SEK</h5>
                              <button className="form-button" id='add-to-cart' onClick={addtocart}> Add To Cart</button>
                        </Box>
                  </div>
            </div>
      )
}
