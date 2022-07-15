import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'
import DeleteIcon from '@mui/icons-material/Delete';
import Success from '../components/Success'

export default function CartPage() {
    const [subtotal, setSubtotal] = useState(0);
    const orderstate = useSelector((state) => state.placeOrderReducer)
    const { success } = orderstate

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems
    const dispatch = useDispatch()
    /*  const subtotal = cartItems.reduce((x, item) => x + item.price, 0) */

    const total = () => {
        let subtotal = 0;
        cartItems.map((item) => {
            return subtotal = item.price * item.quantity + subtotal
        });
        setSubtotal(subtotal);
    };

    useEffect(() => {
        total();
    }, [total])

    return (
        <div data-aos='fade-down'>
            
            {success ? (<Success success='Your Order Placed Successfully' />) : (<div className='cart-container'>
                {cartItems.map(item => {
                    return (<div className='cart-items-container' key={item.name}>
                        <h3>Cart Items</h3>
                        <div className="cart-items">
                            <span className='item-info'>{item.name}</span>
                            <span className='item-info'>Price:  <span className='price'>{item.quantity}*{item.price}={item.price * item.quantity}</span> SEK</span>
                            <div className='quantity-container'>
                                <h4 className=''>Quantity:</h4>
                                <div id='quantity-icon-container'>
                                    
                                    <IndeterminateCheckBoxIcon className='quantity-icon' onClick={() => { dispatch(addToCart(item, item.quantity - 1)) }} />
                                    <span className='item-quantity'>{item.quantity}</span>
                                    <AddBoxIcon className='quantity-icon' onClick={() => { dispatch(addToCart(item, item.quantity + 1)) }} />
                                    
                                </div>
                                <hr />
                            </div>
                            <div>
                                <DeleteIcon id="delete-icon" onClick={() => { dispatch(deleteFromCart(item)) }} />
                            </div>
                        </div>

                        
                    </div>

                    )
                })}
                {cartItems.length > 0 ? (<div className=''>
                <h4 className=''>Total Amount: {subtotal} SEK</h4>
                        <Checkout subtotal={subtotal} />
                </div>) : (<><h3>Your Cart Is Empty</h3> <a href='/'>click here to shop</a></>)

                }

            </div>)}
        </div>

    )
}
