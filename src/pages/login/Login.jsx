import React from 'react';
import { Link } from 'react-router-dom';
import Account from '@material-ui/icons/AccountCircleSharp';
import './login.css';


import logo from '../../images/img/logo.png';


function Login() {
  return <div className='login-container'>
      <div className='left'></div>
        <div className='right'>
          {/* <img src={logo} alt='logo' /> */}
          <div className='login-details'>
                  <h2>User Login</h2>
                  <span><Account className='user'/></span>
              <form>
                 <div className='email'>
                    <label for = 'email'>Email</label>
                    <input type= 'email' placeholder='user@example.com' />
                 </div>
                 <div className='password'>
                    <label for = 'password'>Password</label>
                    <input type= 'password' placeholder='Enter Password' />
                 </div>
                 <div className='otp'>
                    <label for = 'otp'>OTP Pin</label>
                    <input type= 'password' placeholder='Enter OTP Pin' />
                 </div>
                 <button type='submit' >Login</button>
              </form>
              <p>Forgot your password <span> <a href='#'> Reset </a> </span> </p>
              <p>Don't have an account yet? <span> <Link to = '/register'> Sign Up </Link></span> </p>  
          </div>
          {/* <div className='footer'>
              <p> &copy; 2022 KadPay All Rights Reserved </p>
          </div> */}
      </div>

  </div>;
}

export default Login;
