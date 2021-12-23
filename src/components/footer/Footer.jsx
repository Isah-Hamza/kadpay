import './footer.css';
import React from 'react'
import logo from '../../images/rolling_coin.gif'
import telegram from '../../images/telegram.png';
import twitter from '../../images/download.png';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer'>
            <div className = "logo"><img src={logo} alt='logo'/><p>Coin<span style={{color:'red'}}>Exporter</span></p></div>
                <div className='links' > 
                     <div className='social'> 
                        <div className='twitter'><img src={twitter}/><p><a href=''>Follow us on Twitter</a></p></div>&nbsp; - &nbsp;
                        <div className='twitter'><img src={telegram}/><p><a href=''>Join our Telegram Group</a></p></div>
                    </div>
                   
                    <div className='other-links'>
                        <p><a href=''>All Time Rankings</a></p>&nbsp; - &nbsp; 
                        <p><a href=''>Daily Ranking&nbsp;</a></p> -&nbsp; 
                        <p><a href=''>New Listings</a></p>&nbsp; -&nbsp; 
                        <p><a href=''>Submit Coin</a></p> 
                    </div>
                    <div className='terms-condition' style={{display: 'flex'}}>
                            <p><a href=''>Terms and Conditions</a></p>&nbsp; -&nbsp; 
                            <p><a href=''>Privacy Policy</a></p>&nbsp; -&nbsp;
                            <p><a href=''>Advertise</a></p>  
                    </div>
                        
                    
                </div>
                <div className='copyright' > &copy;2021 coinexport.com </div>
            </div>
        </div>
    )
}

export default Footer
