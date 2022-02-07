import React from 'react';
import './register.css';


import logo from '../../images/img/logo.png';
import Account from '@material-ui/icons/AccountCircleSharp';


function Register() {
  return <div className='registration-container'>
      <div className='left'></div>
        <div className='right'>
          {/* <img src={logo} alt='logo' /> */}
          <div className='registration-details'>
                  <h2>User Registration</h2>
                  <span><Account className='user'/></span>
              <form>
                 <div className='email'>
                    <label for = 'email'>Email</label>
                    <input type= 'email' placeholder='user@example.com' />
                 </div>
                 <div className='phone'>
                    <label for = 'phone'>Phone Number</label>
                    <input type= 'text' placeholder='Enter Phone Number ' />
                 </div>
                 <div className='password'>
                    <label for = 'password'>Password</label>
                    <input type= 'password' placeholder='Enter Password' />
                 </div>
                 <div className='confirm_password'>
                    <label for = 'confirm_password'>Confirm Password</label>
                    <input type= 'confirm_password' placeholder='Enter Confirmation Password' />
                 </div>

                 <div className='country'>
                    <label for = 'country'>Country</label>
                    <input type= 'country' placeholder='Enter country' />
                 </div>
                 <button type='submit' >Sign Up</button>
              </form>
              <p>Forgot your password <span> <a href='#'> Reset </a> </span> </p>
              <p>Don't have an account yet? <span> <a href='/login'> Sign In </a></span> </p>  
          </div>
          {/* <div className='footer'>
              <p> &copy; 2022 KadPay All Rights Reserved </p>
          </div> */}
      </div>

  </div>;
}

export default Register;
