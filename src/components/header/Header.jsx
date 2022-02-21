
import logo from '../../images/img/logo.png';


import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import searchIcon from '../../images/search-removebg.png';
import Close from '@material-ui/icons/Close';
import Hamburger from '@material-ui/icons/Menu';

function Header() {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const headerHeight = '285px'
    const toggleOpen = () => {
        if(open)
            setHeight('0px');
        else
            setHeight(headerHeight);
        setOpen(!open);
    }
    return (
        <div className = "header-container">
            <div className = "logo left"><img src={logo} alt='logo'/></div>
            <div className='toggler'>
                <img src={searchIcon} alt='search icon' style={{marginRight:'20px'}} />
               {!open && <Hamburger  alt='hamburger icon' className='hamburger-icon' onClick={toggleOpen} />}
                {open && <Close alt = 'close icon' className='close-icon' onClick={toggleOpen} />}
            </div>
            <div className='right nav-links'>
            
              <ul>
                  <li ><Link className='active' to = '/'>Home</Link></li>
                  <li><Link to = '/services'>Services</Link></li>
                  <li><Link to = '/blog'>Blog</Link></li>
                  <li><Link to = '/about-us'>About us</Link></li>
                  <li><Link to = '/contact-us'>Contact us</Link></li>
                  <li><Link to = '/login'>Login</Link></li>
              </ul>
            
            </div>
            { <div className='mobile-links' style={{height: height}}>
                  <ul onClick={ toggleOpen }>
                    <li onClick={ toggleOpen }><Link className='active' to = '/'>Home</Link></li>
                    <li onClick={ toggleOpen }><Link to = '/services'>Services</Link></li>
                    <li onClick={ toggleOpen }><Link to = '/blog'>Blog</Link></li>
                    <li onClick={ toggleOpen }><Link to = '/about-us'>About us</Link></li>
                    <li onClick={ toggleOpen }><Link to = '/contact-us'>Contact us</Link></li>
                    <li onClick={ toggleOpen }><Link to = '/login'>Login</Link></li>
                  </ul>
            </div> }
        </div>
    )
}

export default Header
