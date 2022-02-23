
import logo from '../../images/img/logo.png';


import React,{ useState, useContext} from 'react';
import { NavLink , Link} from 'react-router-dom';
import { UserContext } from '../../App';
import './header.css';

import searchIcon from '../../images/search-removebg.png';
import Close from '@material-ui/icons/Close';
import Hamburger from '@material-ui/icons/Menu';
import Account from '@material-ui/icons/AccountCircle';

function Header() {
    const { user, setUser } = useContext(UserContext);
    console.log('from header', user)
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
                  <li ><NavLink exact ActiveClassName='active' to = '/'>Home</NavLink></li>
                  <li><NavLink ActiveClassName='active' to = '/services'>Services</NavLink></li>
                  <li><NavLink ActiveClassName='active' to = '/blog'>Blog</NavLink></li>
                  <li><NavLink ActiveClassName='active' to = '/about-us'>About us</NavLink></li>
                  <li><NavLink ActiveClassName='active' to = '/contact-us'>Contact us</NavLink></li>
                  <li style={ user.name && { border:'1px solid', padding:'7px 14px 7px 12px', borderRadius:'6px' , color: 'rebeccapurple !important', }}  >
                  {
                      user.name  ? 
                      <Link className='user_active' to = '/dashboard'> <Account/> { user.name }</Link> :
                      <NavLink ActiveClassName='active' to = '/login'>Login</NavLink> 
                  }
                  </li>
              </ul>
            
            </div>
            { <div className='mobile-links' style={{height: height}}>
                  <ul onClick={ toggleOpen }>
                    <li onClick={ toggleOpen }><NavLink exact ActiveClassName='active' className='active' to = '/'>Home</NavLink></li>
                    <li onClick={ toggleOpen }><NavLink ActiveClassName='active' to = '/services'>Services</NavLink></li>
                    <li onClick={ toggleOpen }><NavLink ActiveClassName='active' to = '/blog'>Blog</NavLink></li>
                    <li onClick={ toggleOpen }><NavLink ActiveClassName='active' to = '/about-us'>About us</NavLink></li>
                    <li onClick={ toggleOpen }><NavLink ActiveClassName='active' to = '/contact-us'>Contact us</NavLink></li>
                    <li onClick={ toggleOpen }><NavLink ActiveClassName='active' to = '/login'>Login</NavLink></li>
                  </ul>
            </div> }
        </div>
    )
}

export default Header
