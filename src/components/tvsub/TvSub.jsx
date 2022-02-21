import React, { useState } from 'react';
import './tvsub.css';

function TvSub() {

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
    <div className='tvsub-component-container' >
         <div className='progress'>
          <div>
            <p>1. Enter Information</p>
            <div className='one active'></div>
          </div>
          <div>
            <p>2. Make Payment</p>
            <div  className = {(step >= 2 )? 'active':null }></div>
          </div>
          <div>
            <p>3. View Receipt</p>
            <div className = {(step == 3 )? 'active':null }></div>
          </div>
        </div>

      <div className = 'service'>
         { step == 1 && <div className='tvsub'>
              <h1>TV Subscription</h1>
              <p>Cable TV Subscription is easy. Fill out the form below... </p>
              <form action = '#'>
                <div className='provider'>
                    <label htmlFor = 'provider'>Provider</label>
                    <select name='provider'  id = 'provider'>
                        <option name = '' value='Select Provider'> Select Provider </option>
                        <option name = 'dstv' value='dstv'> DStv</option>
                        <option name = 'gotv' value='gotv'> GOtv</option>     
                        <option name = 'startimes' value='startimes'> Startimes</option>     
                        <option name = 'showmax' value='showmax'> ShowMax</option>     
                    </select>
                 </div>

                 <div className='bundle'>
                    <label htmlFor = 'bundle'>Bundle</label>
                    <select name='bundle'  id = 'bundle'>
                        <option name = '' value='Select Bundle'> Select Bundle </option>
                        <option name = 'smallie_yearly' value='smallie_yearly'> GOTv Smallie Yearly - #6300</option>
                        <option name = 'supa' value='supa'> GOTv Supa - #5600</option>
                        <option name = 'max' value='max'> GOTv Max - #3700</option>
                        <option name = 'jolli' value='jolli'> GOTv Jolli Bouquet - #2560</option>
                        <option name = 'jinja' value='jinja'> GOTv Jinja Bouquet - #1740</option>
                        <option name = 'smallie_monthly' value='smallie_monthly'> GOTv Smallie Monthly - #900</option>
                    </select>
                 </div>

                 <div>
                  <label htmlFor='card_number'>Smart Card Number</label>
                  <input id= 'card_number' type='text' placeholder = 'Enter smart card number'/>
                </div>
                
                <div>
                  <label htmlFor='phone_number'>Phone Number</label>
                  <input type='text' placeholder = 'Enter phone number'/>
                </div>

                <div>
                
                  <label htmlFor='email'>Email Address</label>
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
                <p>Provider</p>
                <p>GOtv</p>
              </div>

              <div>
                <p>Bundle</p>
                <p>GOtv Smallie Yearly - #1740</p>
              </div>

              <div>
                <p>Transaction ID</p>
                <p>{generateTransactionID()}</p>
              </div>

              <div>
                <p>Card Number</p>
                <p>78653566898</p>
              </div>

              <div>
                <p>Phone Number</p>
                <p>09034324334</p>
              </div>
              <div>
                <p>Customer Email</p>
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
                  <button onClick={incrementStep}>Pay</button>
                </div>
            </div>
            </div>
          </div>} 
      </div>
    </div>
  )
}

export default TvSub