import React, { useState } from 'react';
import './transfer.css';


function Transfer() {
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
    <div className='transfer-component-container'>
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
         { step == 1 && <div className='transfer'>
              <h1>Transfer Money</h1>
              <p>To transfer money to family, friends and clients. Simply fill out this form ...</p>
              <form action = '#'>
                <div className='recpeint_bank'>
                    <label htmlFor = 'recepient_bank'>Select Recepient Bank</label>
                    <select name='recepient_bank'  id = 'recepient_bank'>
                        <option name = '' value='Select Recepient Bank'> Select Receipt Bank </option>
                        <option name = 'Gtb' value='Gtb'> GTB</option>
                        <option name = 'Zenith' value='Zenith'> Zenith</option>     
                        <option name = 'FirstBank' value='FirstBank'> FirstBank</option>     
                        <option name = 'UBA' value='UBA'> UBA</option>     
                        <option name = 'Union' value='Union'> Union</option>     
                    </select>
                 </div>

                 <div>
                  <label htmlFor='account_number'>Receipt Account Number</label>
                  <input type='text' placeholder = 'Enter account number here...'/>
                </div>

                <div>
                  <label htmlFor='account_name'>Account Name</label>
                  <input type='text' id = 'account_name' placeholder = 'Enter amount here...'/>
                </div>

                 <div>
                  <label htmlFor='amount'>Amount</label>
                  <input type='text' placeholder = 'Enter amount here...'/>
                </div>

                <div>
                  <label htmlFor='recepient_phone'>Receipt Number</label>
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
                <p>Recepient Bank</p>
                <p>Zenith</p>
              </div>
              <div>
                <p>Recepient Account Number</p>
                <p>0222222951</p>
              </div>
              <div>
                <p>Account Name</p>
                <p>John Doe</p>
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
                <p>Recepient Phone Number</p>
                <p>07012345678</p>
              </div>
              <div>
                <p>Notification Phone Number</p>
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

export default Transfer