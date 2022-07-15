import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../actions/productActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Product from '../components/Product'


export default function Home() {
  const dispatch = useDispatch()
  const productsstate = useSelector(state => state.getAllProductsReducer)
  const { products, error, loading } = productsstate
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div id='products-container'>
      {loading ? (<Loading />) : error ? (<Error error="OH NOOO! You Got an Error!" />) : (
        products.map(product => {
          return (
            <div key={product.name} >
              <Product product={product} />
            </div>
          )
        })
      )}
    </div>
  )
}
