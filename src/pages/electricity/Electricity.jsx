import React from 'react'
import './electricity.css'

import phed from '../../images/img/phed.jpg';
import aedc from '../../images/img/aedc.jpg';
import ikedc from '../../images/img/ikedc.jpg';
import ekedc from '../../images/img/ekedc.jpg';
import kedco from '../../images/img/kedco.jpg';
import kaedco from '../../images/img/kaedco.jpg';
import ibedc from '../../images/img/ibedc.jpg';


function Electricity() {
  return (
    <div className='electricity-container'>
        <h2>Electricity bill</h2>
        <p>To make electricity bill payment kinkly select your state</p>
        <select name='state'  id = 'state'>
            <option name = '' value=''> Select your state </option>
            <option name = 'kogi' value='kogi'> Kogi</option>
            <option name = 'Nassarawa' value='Nassarawa'> Nassarawa</option>
            <option name = 'Benin' value='Benin'> Benin</option>
            <option name = 'Jigawa' value='Jigawa'> Jigawa</option>
            <option name = 'Niger' value='Niger'> Niger</option>
            <option name = 'Abuja' value='kogi'> Abuja</option>
            <option name = 'Kano' value='Kano'> Kano</option>
            {/* <option name = 'Port_hacourt' value={Port Harcourt}> Port Hacourt </option> */}
        </select>
        <div className='electricity-services'>
            <div>
                <img src= { ikedc } />
                <div>
                    <p>Ikeja Electricity Payment - IKEDC</p>
                    <p>Prepaid and postpaid IKEDC payment</p>
                </div>
            </div>
            <div>
                <img src= { ekedc } />
                <div>
                    <p>Eko Electricity Payment - EKEDC</p>
                    <p>Prepaid and postpaid EKEDC payment</p>
                </div>
            </div>

            <div>
                <img src= { aedc } />
                <div>
                    <p>Abuja Electricity Payment - AEDC</p>
                    <p>Prepaid and postpaid AEDC payment</p>
                </div>
            </div>

            <div>
                <img src= { kedco } />
                <div>
                    <p>Kano Electricity Payment</p>
                    <p>Prepaid and postpaid KEDCO payment</p>
                </div>
            </div>

            <div>
                <img src= { phed } />
                <div>
                    <p>Porh Hacourt Electricity Payment</p>
                    <p>Prepaid and postpaid PHED payment</p>
                </div>
            </div>

            <div>
                <img src= { kaedco } />
                <div>
                    <p>kaduna Electricity Payment </p>
                    <p>Prepaid and postpaid KAEDCO payment</p>
                </div>
            </div>

            <div>
                <img src= { ibedc } />
                <div>
                    <p>Ibadan Electricity Payment</p>
                    <p>Prepaid and postpaid IBEDC payment</p>
                </div>
            </div>

            <>

            </>

        </div>
    </div>
  )
}

export default Electricity