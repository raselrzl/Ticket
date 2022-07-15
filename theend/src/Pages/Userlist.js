import React, {useEffect} from 'react'
import '../CSS/Userlist.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUsers } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'

export default function Userlist() {
  const dispatch=useDispatch()

  const userstate=useSelector(state=>state.getAllUsersReducer)

  const {users, error, loading}=userstate
  useEffect(()=>{
    dispatch(getAllUsers())
  },[])
  return (
    <div className='table-responsive-sm'>
        <h1>Userlist</h1>
        {loading && (<Loading />)}
        {error && (<Error error='Something Went Wrong'/>)}

        <table id="table">
            <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
            </thead>
            <tbody>
              {users && users.map(user=>{
                return <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><DeleteIcon onClick={()=>{dispatch(deleteUser(user._id))}}/></td>
                </tr>
              })}
            </tbody>

        </table>
    </div>
  )
}
