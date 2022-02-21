import React, { useState } from 'react';
import './electricity.css';

function Electricity() {

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
    <div className='electricity-component-container'>
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
         { step == 1 && <div className='electricity'>
              <h1>Buy Electricity</h1>
              <p>Want to buy electricity units. You can do that here...</p>
              <form action = '#'>
                <div>
                  <label htmlFor='meter_number'>Meter Number</label>
                  <input type='text' placeholder = 'Enter meter number'/>
                </div>
                <div className='meter-type'>
                    <label htmlFor = 'type'>Meter Type</label>
                    <select name='meter_type'  id = 'meter_type'>
                        <option name = '' value='Select Meter Type'> Select Meter Type </option>
                        <option name = 'prepaid' value='prepaid'> Prepaid</option>
                        <option name = 'postpaid' value='postpaid'> Postpaid</option>     
                  </select>
                 </div>
                 <div>
                  <label htmlFor='state'>Select State</label>
                 <select name='state'  id = 'state'>
                    <option name = 'state' value='state'> Select your state </option>
                    <option name = 'kogi' value='kogi'> Kogi</option>
                    <option name = 'Nassarawa' value='Nassarawa'> Nassarawa</option>
                    <option name = 'Benin' value='Benin'> Benin</option>
                    <option name = 'Jigawa' value='Jigawa'> Jigawa</option>
                    <option name = 'Niger' value='Niger'> Niger</option>
                    <option name = 'Abuja' value='kogi'> Abuja</option>
                    <option name = 'Kano' value='Kano'> Kano</option>
                </select>
                 </div>
                <div>
                  <label htmlFor='amount'>Amount</label>
                  <input type='text' placeholder = 'Enter amount...'/>
                </div>
                <div>
                  <label htmlFor='phone_number'>Phone Number</label>
                  <input type='text' placeholder = 'Enter phone number'/>
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
                <p>Meter Number</p>
                <p>26836835853</p>
              </div>
              <div>
                <p>Meter Type</p>
                <p>postpaid</p>
              </div>
              <div>
                <p>State</p>
                <p>Kogi</p>
              </div>
              <div>
                <p>Transaction ID</p>
                <p>{generateTransactionID()}</p>
              </div>
              <div>
                <p>Amount</p>
                <p>2000</p>
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

export default Electricity