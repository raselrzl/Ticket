
import Navbarr from './components/Navbar';
import Home from './Pages/Home';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CartPage from './Pages/CartPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Orderpage from './Pages/Orderpage';
import Adminpage from './Pages/Adminpage';
import AOS from 'aos'
import 'aos/dist/aos.css';
import MyBackgroundImage from './Images/h9.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WifiCallingIcon from '@mui/icons-material/WifiCalling';
import HomeIcon from '@mui/icons-material/Home';

function App() {
  AOS.init()
  return (
    <div style={{
      backgroundImage: `url(${MyBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position:'relative',
    }}
    className='app-container'
    >
      
      <Navbarr />
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path='/cart' exact element={<CartPage />} />
            <Route path='/register' exact element={<Register/>}/>
            <Route path='/login' exact element={<Login/>}/>
            <Route path='/orders' exact element={<Orderpage/>}/>
            <Route path='/admin/*' element={<Adminpage />}/>
        </Routes>            
      </BrowserRouter>
      <div className='icon-container'>
          <FacebookIcon className='icon-size'/>
          <InstagramIcon className='icon-size'/>
          <EmailIcon className='icon-size'/>
          <WifiCallingIcon className='icon-size'/>
          <a href='/'><HomeIcon className='icon-size' /></a>
        </div>
    
    </div>
  );
}

export default App;
