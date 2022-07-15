import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route, Link } from 'react-router-dom';
import Addnewproduct from './Addnewproduct'
import Orederslist from './Orederslist'
import Productslist from './Productslist'
import Updateproduct from './Updateproduct';
import Userlist from './Userlist'
export default function Adminpage() {
  const userstate = useSelector(state => state.loginUserReducer)
  const { currentUser } = userstate
  const dispatch = useDispatch()
  console.log(dispatch)

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = '/'
    }
  }, [])
  return (
    <div className='admin-pannel'>
      <h5 className='title'>Admin Pannel</h5>
      <ul className='functions'>
        <li><Link to={'/admin/userlist'} style={{ color: 'white' }}>Userslist</Link></li>
        <li><Link to={'/admin/productslist'} style={{ color: 'white' }}>Products-list</Link></li>
        <li><Link to={'/admin/addnewproduct'} style={{ color: 'white' }}>Add-new-product</Link></li>
        <li><Link to={'/admin/orederslist'} style={{ color: 'white' }}>Oreders-list</Link></li>
      </ul>
      <Routes>
        <Route path="/addnewproduct" element={<Addnewproduct />} />
        <Route path='/orederslist' element={<Orederslist />} />
        <Route path='/productslist' element={<Productslist />} />
        <Route path='/userlist' element={<Userlist />} />
        <Route path='/editproduct/:productid' element={<Updateproduct />} />
      </Routes>
    </div>
  )
}
