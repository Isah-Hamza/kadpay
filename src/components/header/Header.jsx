import React,{ useState } from 'react';
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
    const [left, setLeft] = useState('-100%');
    const toggleOpen = () => {
        if(open)
            setLeft('-110%');
        else
            setLeft('0%');
        setOpen(!open);
    }
    return (
        <div className = "header-container">
            <div className = "logo left"><img src={logo1} alt='logo'/><p>Coin<span style={{color:'red'}}>Exporter</span></p></div>
            <div className='toggler'>
                <img src={searchIcon} alt='search icon' style={{marginRight:'20px'}} />
               {!open && <img src={hamburger_icon} alt='hamburger icon' className='hamburger-icon' onClick={toggleOpen} />}
                {open && <img src={close_icon} alt = 'close icon' className='close-icon' onClick={toggleOpen} style={{filter: 'invert(1)', height: '22px'}}/>}
            </div>
            <div className='right'>
            <div className = "coin">
            <li className='coin'>Coins <KeyboardArrowDownIcon className='arrow down'/>
                <ul className='coin-dropdown'>
                    <li>Today's Best</li>
                    <li>All Time Best</li>
                    <li>New Listings</li>
                    <li>By Marketcap</li>
                    <li>Presales</li>
                </ul>
            </li>
            </div>
            <div className = "search-box">
            <img src={searchIcon} alt='search icon'/>
                <input type = 'text' placeholder = 'search coins...' />
            </div>
            <div className = "coin">
            <li className='coin'>Account <KeyboardArrowDownIcon className='arrow down'/>
                <ul className='coin-dropdown'>
                    <li>Portfolio</li>
                    <li>WatchList</li>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </li>
            </div>
            <div className = "social-media">
                <img src = {telegram} alt='telegram'/>
                <img src = {twitter}  alt='twitter'/>
            </div>
            <div className = "submit-coin">  <button> <PublishIcon /> Submit Coin</button></div>
            </div>
            {  <div className='mobile-links' style={{left: left}}>
                <ul>
                    <li><Account className='icon' /> My Account</li>
                    <li><Clock className='icon' />WatchList</li>
                    <li> <Fire className='icon' /> Today's Best</li>
                    <li><Clock className='icon' />All Time Best</li>
                    <li><EmailIcon className='icon' />New Listings</li>
                    <li><Fire className='icon' />By Marketcap</li>
                    <li><Glass className='icon' />Presales</li>
                    <li><PublishIcon className='icon'/>Submit Coin</li>
                    <li><EmailIcon className='icon' /> Contact Us</li>
                    <li> <img className='icon' src={twitter} alt = 'twitter'/> Follow us on Twitter</li>
                    <li> <img className='icon' src={telegram} alt = 'telegram'/> Join our Telegram group! </li>
                    
                </ul>
            </div>}
        </div>
    )
}

export default Header
