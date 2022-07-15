import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Box from '@mui/material/Box';
import { Avatar, Paper, TextField } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginstate = useSelector(state => state.loginUserReducer)
    const { loading, error } = loginstate
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }
    }, [])

    function login() {
        const user = { email, password }
        dispatch(loginUser(user))
    }
    return (
        <div data-aos="fade-left">
            <Box className="container-form">
                <Paper className="form-container" elevation={15}>
                    <Avatar sx={{ backgroundColor: '#3b0f1c', alignSelf: 'center' }}>
                        <VerifiedUserIcon />
                    </Avatar>
                    {loading && (<Loading />)}
                    {error && (<Error error='Invalid Credentials' />)}
                    <TextField
                        sx={{ m: 1 }}
                        type='email'
                        label="Email"
                        variant="standard"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        sx={{ m: 1 }}
                        type="password"
                        label="Password"
                        variant="standard"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='form-button' onClick={login}>Login</button>
                    <br />
                    <div className='link-container'>
                        <span className='signup-link'><p className='signup-link link'>Forgot Password?</p></span>
                        <span className='signup-link'><a href='/register' className='link'>Sign Up</a></span>
                    </div>

                </Paper>
            </Box>
        </div>
    )
}
