import React, { useState } from 'react';
import './data.css'

function Data() {
    const [step, setStep] = useState(1);

    const incrementStep = () => {
      setStep(step +1)
    }
  
    const decrementStep = () => {
      setStep(step -1)
    }
  
    const generateTransactionID = () => {
      let transactionID = '';
      for(var i = 0; i < 12; i++){
        const randomNumber = Math.floor(Math.random() * 9 + 0);
        transactionID += randomNumber;
      }
      return transactionID;
    }
  return (
    <div className='data-component-container'>
          <div className='progress'>
          <div>
            <p>1. Enter Information</p>
            <div className='one active'></div>
          </div>
          <div>
            <p>2. Make Payment</p>
            <div  className = {(step == 2 )? 'active':null }></div>
          </div>
          <div>
            <p>3. View Receipt</p>
            <div className = {(step == 3 )? 'active':null }></div>
          </div>
        </div>

      <div className = 'service'>
         { step == 1 && <div className='data'>
              <h1>Buy Data</h1>
              <p>Top-up your data on KadPay for any network</p>
              <form action = '#'>
                <div className='network-provider'>
                    <label htmlFor = 'type'>Network Provider</label>
                    <select name='network_provider'  id = 'network_provider'>
                        <option name = '' value='Select Network Provider'> Select Network Provider </option>
                        <option name = 'mtn' value='mtn'> MTN</option>
                        <option name = 'glo' value='glo'> Glo</option>     
                        <option name = 'airtel' value='airtel'> Airtel</option>     
                        <option name = '9mobile' value='9mobile'> 9Mobile</option>     
                        <option name = 'smile' value='smile'> Smile</option>     
                    </select>
                 </div>

                 <div className='network-provider'>
                    <label htmlFor = 'bundle'>Network Provider</label>
                    <select name='bundle'  id = 'bundle'>
                        <option name = '' value='Select Network Provider'> Select Network Provider </option>
                        <option name = 'mtn_100mb' value='mtn_100mb'> MTN 100mb for #100</option>
                        <option name = 'mtn_500mb' value='mtn_500mb'> MTN 500mb for #300</option>     
                        <option name = 'mtn_1gb' value='mtn_1gb'> MTN 1GB for #500</option>     
                        <option name = 'mtn_1.5gb' value='mtn_1.5gb'> MTN 1.5GB for #1000</option>     
                        <option name = 'mtn_2gb' value='mtn_2gb'> MTN 2GB for #1500</option>     
                    </select>
                 </div>

                <div>
                  <label htmlFor='recepient_phone'>Amount</label>
                  <input type='text' placeholder = 'Enter Recepient Phone Number...'/>
                </div>

                <div>
                  <label htmlFor='notification_phone_number'>Notification Phone Number</label>
                  <input type='text' placeholder = 'Enter notification phone number'/>
                </div>

                <div>
                  <label htmlFor='email'>Email</label>
                  <input type='email' placeholder = 'user@example.com'/>
                </div>
                <button  onClick={ incrementStep }> Confirm </button>
              </form>
          </div>}
         
         { step == 2 && <div className='make-payment'>
            <h1> Make Payment</h1>
            <div>
            <div className = 'supplied-info'>
              <div>
                <p>Network Provider</p>
                <p>MTN</p>
              </div>
              <div>
                <p>Transaction ID</p>
                <p>{generateTransactionID()}</p>
              </div>
              <div>
                <p>Amount</p>
                <p>500</p>
              </div>
              <div>
                <p>Phone Number</p>
                <p>09034324334</p>
              </div>
              <div>
                <p>Email</p>
                <p>itshamzy@gmail.com</p>
              </div>
            </div>
            <div className='payment-mode'>
                <div className='card'>
                    <label htmlFor = 'existing_card'>Pay With Existing Card</label>
                    <select name='existing_card'  id = 'existing_card'>
                        <option name = '' value='select_a_card'> Select A Card </option>
                        <option name = 'Gtb' value='Gtb'> GTB</option>
                        <option name = 'first_bank' value='first_bank'> First Bank</option>     
                  </select>
                 </div>
                <div className='other-options'>
                  <p>Pay with Card</p>
                  <p>Pay with USSD</p>
                  <p>Pay with Voucher</p>
                  <p>Pay with Wallet</p>
                </div>
                <div className='buttons'>
                  <button onClick={decrementStep}>Go Back</button>
                  <button>Pay</button>
                </div>
            </div>
            </div>
          </div>} 
      </div>
    </div>
  )
}

export default Data