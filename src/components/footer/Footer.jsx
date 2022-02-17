import React from 'react';
import './footer.css'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YoutubeIcon from '@material-ui/icons/YouTube';


function Footer() {
  return <div className='footer-container'>
    <div>
        <div>
          <p>Patronise us today!</p>
          <p>Transfer money</p>
          <p>Top up</p>
          <p>Buy Data</p>
          <p>Pay your bills</p>
        </div>
        <div>
          <p>About </p>
          <p>About us</p>
          <p>Help</p>
          <p>FAQs</p>
          <p>Blogs</p>
          <p>Developers</p>
        </div>
        <div>
          <p>Contact Info.</p>
          <p>+2237065786031</p>
          <p>info@kadpay.com</p>
          <p>21 A, London Bridge,</p>
          <p>London, United Kindgdom</p>
        </div>
        <div className='social-media'>
          <p>Follow us on social media </p>
          <p><FacebookIcon className = 'color' /> Facebook</p>
          <p><InstagramIcon className = 'color' /> Instagram</p>
          <p><TwitterIcon className = 'color' /> Twitter</p>
          <p><YoutubeIcon className = 'color' /> Youtube</p>
        </div>
    </div>
    <p>
        Copyright &copy; 2022 KadPay. All rights reserved
    </p>
  </div>;
}

export default Footer;
