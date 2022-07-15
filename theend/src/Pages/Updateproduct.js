import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { editProduct, getProductById } from '../actions/productActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
import {TextField } from '@mui/material';
import '../CSS/Updateproduct.css'
export default function Updateproduct() {
    const [name, setName]=useState('')
    const [price, setPrice]=useState()
    const [description, setDescription]=useState('')

    const getproductbyidstate=useSelector(state=>state.getProductByIdReducer)
    const {product, error, loading}=getproductbyidstate

    console.log(error)
    const editproductstate=useSelector(state=>state.editProductReducer)
    const {editsuccess, editerror, editloading}=editproductstate

    const dispatch=useDispatch()
    const { productid } = useParams()

    useEffect(()=>{
      if(product){
        if(product._id===productid){
          setName(product.name)
          setDescription(product.description)
          setPrice(product.price)
        }else{
          dispatch(getProductById(productid))
        }
      }else{
        dispatch(getProductById(productid))
      }
    },[product,dispatch])

    const handleSubmit=(e)=>{
        e.preventDefault()
        const editedproduct={
          _id:productid,
          name,
          description,
          price
        }
        console.log(editedproduct)
        dispatch(editProduct(editedproduct))
      }
  return (
    <div className='shadow p-3 mb-5 bg-white rounded'>
        <h1>Edit Product</h1>
        <div>
          {loading && (<Loading />)}
          {editloading && (<Loading />)}
          {editerror && (<Error error='something went wrong'/>)}
          {editsuccess &&(<Success success='Product details Edited Successfully'/>)}

         <form onSubmit={handleSubmit} className='update-product-form'>
              <TextField 
                  className='form-control' 
                  type='text' 
                  placeholder='Name' 
                  value={name} 
                  onChange={(e)=>{setName(e.target.value)}}
              />  
              <TextField 
                  className='form-control' 
                  type='number' 
                  placeholder='price' 
                  value={price} 
                  onChange={(e)=>{setPrice(e.target.value)}}
              /> 
              
              <TextField 
                  className='form-control' 
                  type='text' 
                  placeholder='Description' 
                  value={description} 
                  onChange={(e)=>{setDescription(e.target.value)}}
              />           
           <button className='form-button' type='submit'>Edit Product</button>
         </form>
      </div>     
    </div>
  )
}
