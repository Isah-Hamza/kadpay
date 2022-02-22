import React from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@material-ui/icons/LockTwoTone';
import './login.css';


function Login() {
  return <div className='login-container'>
      <div className='left'></div>
        <div className='right'>
          <div className='login-details'>
                  <h2>User Login</h2>
                  <span><LoginIcon className='user'/></span>
              <form action ='/dashboard' >
                 <div className='email'>
                    <label htmlFor = 'email'>Email</label>
                    <input type= 'email' placeholder='user@example.com' />
                 </div>
                 <div className='acc-type'>
                    <label htmlFor = 'type'>I'm Operating </label>
                    <select name='account_type'  id = 'account_type'>
                        <option name = '' value=''> Select Account Type </option>
                        <option name = 'pos_merchant' value='pos_merchant'> POS Merchant Account</option>
                        <option name = 'personal' value='personal'> Personal Account</option>
                        <option name = 'Premium' value='Premium'> Premium Account</option>
                        <option name = 'business' value='business'> Business Account</option>
                        <option name = 'merchant' value='merchant'> Merchant Account</option>
                  </select>
                 </div>
                 <div className='password'>
                    <label htmlFor = 'password'>Password</label>
                    <input type= 'password' placeholder='Enter Password' />
                 </div>
                 <div className='otp'>
                    <label htmlFor = 'otp'>OTP Pin</label>
                    <input type= 'password' placeholder='Enter OTP Pin' />
                 </div>
                 <button type='submit' >Login</button>
              </form>
              <p>Forgot your password <span> <a href='#'> Reset </a> </span> </p>
              <p>Don't have an account yet? <span> <Link to = '/register'> Sign Up </Link></span> </p>  
          </div>
      </div>

  </div>;
}

export default Login;
