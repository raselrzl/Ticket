import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch, useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderAction'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'

export default function Checkout({subtotal}) {
    const orderstate=useSelector((state)=>state.placeOrderReducer)
    const {loading, error, success}=orderstate
    const dispatch=useDispatch()
    function tokenHandler(token){
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }

    
  return (
    <div>
        {loading && (<Loading />)}
        {error && (<Error error='Something went Wrong' />)}
        {success && (<Success success='Your Order Placed Successfully' />)}
        <StripeCheckout 
            amount={subtotal*100}
            shippingAddress
            token={tokenHandler}
            currency='SEK'
            stripeKey='pk_test_nXdoVeXLdvVleViwWTG64iyQ00RQWrUXqf'
        >
          <button className="form-button">Pay Now</button>
        </StripeCheckout>
    </div>
  )
}
