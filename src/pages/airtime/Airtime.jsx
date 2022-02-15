import React from 'react'
import './airtime.css'

import airtel from '../../images/img/airtel.jpg';
import mtn from '../../images/img/mtn.jpg';
import glo from '../../images/img/glo.jpg';
import smile from '../../images/img/smile.jpg';
import nineMobile from '../../images/img/9mobile.jpg';


function Airtime() {
  return (
    <div className='airtime-container'>
        <h2>Airtime Recharge</h2>
        <p>Recharge your phone airtime using KadPay VTU Service</p>

        <div className='airtime-services'>
            <div>
                <img src= { airtel } />
                <div>
                    <p>Airtel Airtime VTU</p>
                    <p>Airtel airtime - Get instant top-up</p>
                </div>
            </div>

            <div>
                <img src= { mtn } />
                <div>
                    <p>MTN Airtime VTU</p>
                    <p>MTN airtime - Get instant top-up</p>
                </div>
            </div>

            <div>
                <img src= { glo } />
                <div>
                    <p>Glo Airtime VTU</p>
                    <p>Glo airtime - Get instant top-up</p>
                </div>
            </div>

            <div>
                <img src= { nineMobile } />
                <div>
                    <p>9Mobile Airtime VTU</p>
                    <p>9Mobile airtime - Get instant top-up</p>
                </div>
            </div>

            <div>
                <img src= { smile } />
                <div>
                    <p>Smile Airtime VTU</p>
                    <p>Smile airtime - Get instant top-up</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Airtime