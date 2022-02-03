import React from 'react';
import './contact.css';

function contact() {
  return <div className='contact-container'>
            <div class="contact">
                <h1>KadPay contact <span className='primary-color'>page</span> </h1>
                <p class="enquiry">For inquiries, suggestions and complains. Mail us at: </p>
                <p class="email">info@kadpay@yahoo.com</p>
                <div class="subject">
                    <p>Subject <span>*</span></p>
                    <input type="text" name="subject" id="subject" />
                </div>
                <div class="mesage">
                    <p>Message <span>*</span></p>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <button class="send">Send</button>
          </div>
  </div>;
}
export default contact;
