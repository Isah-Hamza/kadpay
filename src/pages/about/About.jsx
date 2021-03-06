import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import './about.css';

import about from '../../images/img/about-us.jpg';

function About() {

const question = useRef(null);
const faq = useRef(null);
const [experience, setExperience] = useState(0);
const [clients, setClients] = useState(0);
const [satisfaction, setSatisfaction] = useState(0);
const [symbol, setSymbol] = useState('+');

      useLayoutEffect(() => {
        const divs = Array.from(faq.current.children);
        divs.forEach(div => {
          const children = Array.from(div.children);
          children[0].addEventListener('click', () => {
            children[0].classList.toggle('open');
            children[1].classList.toggle('open');
            const span = [...children[0].children][0];
            if(children[0].classList.contains('open')){
              span.textContent =  '-';
              // span.style.fontSize = '18px';
            }else{
              // span.style.fontSize = 'initial';
              span.textContent = '+'
            }
            // span.textContent == '+' ?  : ;
          })
        });
        return () => {
        }
      }, [  ])

      useEffect(() => {
        
        const interval1 = setInterval(() => {
          setClients(clients +1)
          if(clients >= 165) {
            setClients(185)
          }

          setSatisfaction(satisfaction +1)
            if(satisfaction >= 100) {
                setSatisfaction(100)
              }

          setExperience(experience +1)
            if(experience >= 6) {
              setExperience(6)
            }          
        }, 40);
      
        return () => {
          clearInterval(interval1)
        }
      }, [clients, satisfaction])
      

  return (
    <div className='about-container'>
        <div className='about-header'>
            <p>Who We Are</p>
            <h1>ABOUT US</h1>
        </div>
        <div className='about-us'>
            <div>
              <img src = {about} alt = 'about-us' />
            </div>
            <div className='description'>
                <h1>More About <span className='color'>Us</span> </h1>
                <p> KadPay.com is world's top payment platform providing fast, easy online payment solution for millions of
                    people. We are impacting lives by ensuring payments for day-to-day services you enjoy are
                    stress-free. With KadPay.com, you can perform quick transactions anytime and anywhere using any device.</p>
                <p>Pay Smarter, Pay Better and Pay Faster
                  KadPay gives you the option to pay in an easier,
                  faster, smater and more securely from the
                  comfort of your room</p>
                <div className='info'>
                  <p><h1>{`${experience}`}</h1><span>Years of Experience</span></p>
                   <p> <h1>{`${clients}k`}</h1><span>Happy Clients</span> </p>
                   <p> <h1>{`${satisfaction}%`}</h1><span>Satisfaction</span> </p>
                </div>
            </div>
        </div>
        <div className='about-header'>
            <p>How it Works</p>
            <h1>FAQs</h1>
        </div> 
        <div className='faq' ref = { faq }>
          <div >
            <h2 className='open' ref={question}> What is KadPay All About? <span> - </span> </h2>
            <p  className='open'>KadPay.com is world's top payment platform providing fast, easy online payment solution for millions of
                people. We are impacting lives by ensuring payments for day-to-day services you enjoy are
                stress-free. With KadPay.com, you can perform quick transactions anytime and anywhere using any device.</p>
          </div>

          <div>
            <h2 ref={question}> What Kinds of Packages Are Available? <span> + </span> </h2>
            <p >KadPay.com is world's top payment platform providing fast, easy online payment solution for millions of
                people. We are impacting lives by ensuring payments for day-to-day services you enjoy are
                stress-free. With KadPay.com, you can perform quick transactions anytime and anywhere using any device.</p>
          </div>

          <div>
            <h2 ref={question}> How To Use Our Service? <span> + </span> </h2>
            <p >KadPay.com is world's top payment platform providing fast, easy online payment solution for millions of
                people. We are impacting lives by ensuring payments for day-to-day services you enjoy are
                stress-free. With KadPay.com, you can perform quick transactions anytime and anywhere using any device.</p>
          </div>

          <div>
            <h2 ref={question}> How To Create A New Account? <span> + </span> </h2>
            <p >KadPay.com is world's top payment platform providing fast, easy online payment solution for millions of
                people. We are impacting lives by ensuring payments for day-to-day services you enjoy are
                stress-free. With KadPay.com, you can perform quick transactions anytime and anywhere using any device.</p>
          </div>


          <div>
            <h2 ref={question}> How Can I keep My Account Safe? <span> + </span> </h2>
            <p >KadPay.com is world's top payment platform providing fast, easy online payment solution for millions of
                people. We are impacting lives by ensuring payments for day-to-day services you enjoy are
                stress-free. With KadPay.com, you can perform quick transactions anytime and anywhere using any device.</p>
          </div>

          <div>
            <h2 ref={question}> What is KadPay All About? <span> + </span> </h2>
            <p >KadPay.com is world's top payment platform providing fast, easy online payment solution for millions of
                people. We are impacting lives by ensuring payments for day-to-day services you enjoy are
                stress-free. With KadPay.com, you can perform quick transactions anytime and anywhere using any device.</p>
          </div>

          <div>
            <h2 ref={question}> I Forgot My Password. What Should I do? <span> + </span> </h2>
            <p >KadPay.com is world's top payment platform providing fast, easy online payment solution for millions of
                people. We are impacting lives by ensuring payments for day-to-day services you enjoy are
                stress-free. With KadPay.com, you can perform quick transactions anytime and anywhere using any device.</p>
          </div>

          <div>
            <h2 ref={question}> Can I Create More Than One Account? <span> + </span> </h2>
            <p >KadPay.com is world's top payment platform providing fast, easy online payment solution for millions of
                people. We are impacting lives by ensuring payments for day-to-day services you enjoy are
                stress-free. With KadPay.com, you can perform quick transactions anytime and anywhere using any device.</p>
          </div>

          <div>
            <h2 ref={question}> Want to Talk to Us? <span> + </span> </h2>
            <p >KadPay.com is world's top payment platform providing fast, easy online payment solution for millions of
                people. We are impacting lives by ensuring payments for day-to-day services you enjoy are
                stress-free. With KadPay.com, you can perform quick transactions anytime and anywhere using any device.</p>
          </div>
        </div>
    </div>
  )
}

export default About