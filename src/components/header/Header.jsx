// import React from 'react';
// import { Link } from 'react-router-dom';
// import './header.css';
import logo from '../../images/img/logo.png';

// export default header;




import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import telegram from '../../images/telegram.png';
import twitter from '../../images/download.png';
import searchIcon from '../../images/search-removebg.png';
import logo1 from '../../images/rolling_coin.gif';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PublishIcon from '@material-ui/icons/Publish';
import hamburger_icon from '../../images/icon-hamburger.svg';
import close_icon from '../../images/icon-close.svg';
import EmailIcon from '@material-ui/icons/Email';
// import UserIcon from '@material-ui/icons/Contact';
import Account from '@material-ui/icons/AccountCircleSharp';
import Clock from '@material-ui/icons/Timer';
import Fire from '@material-ui/icons/FireplaceSharp';
import Glass from '@material-ui/icons/HourglassEmpty'

function Header() {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const headerHeight = '275px'
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
               {!open && <img src={hamburger_icon} alt='hamburger icon' className='hamburger-icon' onClick={toggleOpen} />}
                {open && <img src={close_icon} alt = 'close icon' className='close-icon' onClick={toggleOpen} style={{ height: '20px'}}/>}
            </div>
            <div className='right nav-links'>
            
              <ul>
                  <li ><Link className='active' to = '/'>Home</Link></li>
                  <li><Link to = '#'>Services</Link></li>
                  <li><Link to = '#'>Blog</Link></li>
                  <li><Link to = '#'>About us</Link></li>
                  <li><Link to = '/contact-us'>Contact us</Link></li>
                  <li><Link to = '/login'>Login</Link></li>
              </ul>
            
            </div>
            { <div className='mobile-links' style={{height: height}}>
                  <ul onClick={ toggleOpen }>
                    <li onClick={ toggleOpen }><Link className='active' to = '/'>Home</Link></li>
                    <li onClick={ toggleOpen }><Link to = '#'>Services</Link></li>
                    <li onClick={ toggleOpen }><Link to = '#'>Blog</Link></li>
                    <li onClick={ toggleOpen }><Link to = '#'>About us</Link></li>
                    <li onClick={ toggleOpen }><Link to = '/contact-us'>Contact us</Link></li>
                    <li onClick={ toggleOpen }><Link to = '/login'>Login</Link></li>
                  </ul>
            </div> }
        </div>
    )
}

export default Header
