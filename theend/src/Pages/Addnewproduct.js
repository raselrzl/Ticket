import React, { useState } from 'react'
import { addProduct } from '../actions/productActions'
import {useDispatch, useSelector} from 'react-redux'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
import {TextField } from '@mui/material';


export default function Addnewproduct() {
  const [name, setName]=useState('')
  const [price, setPrice]=useState()
  const [description, setDescription]=useState('')

  const dispatch=useDispatch()
  const addproductstate=useSelector(state=>state.addProductReducer)

  const {success, error, loading}=addproductstate

  const handleSubmit=(e)=>{
    e.preventDefault()
    const product={
      name,
      description,
      price,
    }
    console.log(product)
    dispatch(addProduct(product))
  }
  return (
    <div>
      <div >
         <h2>Add New Product</h2>

          {loading && (<Loading />)}
          {success && (<Success success='New product added Successfully' />)}
          {error && (<Error error='something went wrong'/>)}

         <form onSubmit={handleSubmit} className='update-product-form'>
              <TextField 
                  sx={{ m: 1 }}  
                  type='text' 
                  placeholder='Name' 
                  value={name} 
                  onChange={(e)=>{setName(e.target.value)}}
              />  
              <TextField 
                  sx={{ m: 1 }} 
                  type='number' 
                  placeholder='price' 
                  value={price} 
                  onChange={(e)=>{setPrice(e.target.value)}}
              /> 
              
              <TextField 
                  sx={{ m: 1 }} 
                  type='text' 
                  placeholder='Description' 
                  value={description} 
                  onChange={(e)=>{setDescription(e.target.value)}}
              />          
           <button className='form-button' type='submit'>Add Product</button>
         </form>
      </div>        
    </div>
  )
}
