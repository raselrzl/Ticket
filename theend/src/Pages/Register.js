import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
import Box from '@mui/material/Box';
import { Avatar, Paper, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const registerstate = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = registerstate
    const dispatch = useDispatch()
    function register() {
        if (password !== confirmpassword) {
            alert('password not matched')
        } else {
            const user = {
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
    }
    return (
        <div data-aos="fade-right">
            <Box className="container-form">
            <Paper className="form-container" elevation={15}>
                    {loading && (<Loading />)}
                    {success && (<Success success='User Registered Successfully' />)}
                    {error && (<Error error='Eamil Already Registered' />)}

                    <Avatar sx={{ backgroundColor: '#3b0f1c', alignSelf: 'center' }}>
                        <AccountCircleIcon />
                    </Avatar>
                    <TextField
                        sx={{ mX: 1 }}
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        type="text"
                        label="Full Name"
                        variant="standard"
                        required
                    />
                    <TextField
                        sx={{ mX: 1 }}
                        label="Email"
                        variant="standard"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="text"
                        required
                    />
                    <TextField
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        sx={{ mX: 1 }}
                        type="password"
                        label="Password"
                        variant="standard"
                        required
                    />
                    <TextField
                        value={confirmpassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                        sx={{ mX: 1 }}
                        type="password"
                        label="Confirm Password"
                        variant="standard"
                        required
                    />

                    <button className='form-button' onClick={register}>Sign Up</button>
                    <br />
                    <div className='link-container'>
            <span className='signup-link'><p className='signup-link link'>Forgot Password?</p></span>
            <span className='signup-link'><a href='/login' className='link'>Log In</a></span>
           </div>

                </Paper>
            </Box>
        </div>
    )
}
