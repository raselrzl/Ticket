import React, { useEffect } from 'react'
import '../CSS/OrderPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderAction'
import Error from '../components/Error'
import Loading from '../components/Loading'
import QRCode from '../components/QRCode'
export default function Orderpage() {
  const dispatch = useDispatch()
  const orderstate = useSelector(state => state.getUserOrdersReducer)
  const { orders, error, loading } = orderstate
  useEffect(() => {
    dispatch(getUserOrders())
  }, [])
  return (
    <div className='order-page-container'>
      <h4>MY ORDERS</h4>
      {loading && (<Loading />)}
      {error && (<Error error='Please Login To See Your Order' />)}
      {orders && orders.map((order, i) => {
        return <div key={i}>
          
          

          <div className='order-list' >

        {/*     {order.orderItems.map((item, i) => {
              return <div key={i} >
                <h6> {item.name}</h6>
              </div>
            })} */}

            {/*  <div className=''>
                            <h5>Address</h5>
                            <h6>Street:{order.shippingAddress.street}</h6>
                            <h6>City:{order.shippingAddress.city}</h6>
                            <h6>Country:{order.shippingAddress.country}</h6>
                            <h6>Zipcode:{order.shippingAddress.zipcode}</h6>
                      </div> */}
            <div className=''>
              <h6>Order Amount: {order.orderAmount} SEK</h6>
              <h6>Date: {order.createdAt.substring(0, 10)}</h6>
              {/* <h6>Transaction ID:{order.transactionId}</h6> */}
              <h6>Order ID:{order._id}</h6>
            </div>
            <QRCode qrcodevalue={order.transactionId} />
          </div>
          <hr />
        </div>
      })}
    </div>
  )
}
