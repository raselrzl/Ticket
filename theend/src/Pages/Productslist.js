import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllProducts } from '../actions/productActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import {FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import '../CSS/Productlist.css'

export default function Productslist() {
  const dispatch=useDispatch()
  const productsstate=useSelector(state=>state.getAllProductsReducer)

  const {products, error, loading}=productsstate

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  return (
    <div className='table-responsive-sm'>
        <h2>Product List</h2>
        {loading && (<Loading />)}
        {error && (<Error error='Something Went Wrong'/>)}

        <table id="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
        
        <tbody>
            {products &&products.map(product=>{
                return <tr key={product.name}>
                  <td>{product.name}</td> 
                  <td>                    
                    Price:{product.price}
                  </td>
                  <td>                    
                    {product.description}
                    {product._id}
                  </td>
                  <td> 
                      <Link to={`/admin/editproduct/${product._id}`}>
                          <EditIcon className='edit-delete-icon'/>
                      </Link> 
                      <FaTrash className='edit-delete-icon' onClick={()=>{dispatch(deleteProduct(product._id))}}/>
                  </td>
                </tr>
            })}
        </tbody>
        </table>
        

    </div>
  )
}
