import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CustomizedBadges from './CustomizedBages'
import PersonIcon from '@mui/icons-material/Person';
import { logoutUser } from '../actions/userActions'
import LogoutIcon from '@mui/icons-material/Logout';
export default function Navbarr() {
    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    return (
        <div className='navbar-container'>
            {currentUser ? (<>
                <a className='nav-item' href="/orders">Orders</a>
                <div className='nav-item'>{currentUser.name}</div>
                <div className='nav-item logout-icon' onClick={() => { dispatch(logoutUser()) }}><LogoutIcon /></div>
            </>) : (<a className='nav-item logout-icon' href='/login'><PersonIcon /></a>)
            }
            {(cartstate.cartItems.length > 0) ? (<a className='nav-item cart-bedge' href='/cart'><CustomizedBadges cartlength={cartstate.cartItems.length} /></a>) : null}



        </div>
    )
}
