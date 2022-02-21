import React from 'react';
import { Link } from 'react-router-dom';
import './services.css';

import mobile from '../../images/img/mobile.png';
import wifi from '../../images/img/wifi.png';
import tv from '../../images/img/tv.png';
import bulb from '../../images/img/bulb.png';
import person from '../../images/img/person.png';
import service from '../../images/img/service.png';

import HeadsetIcon from '@material-ui/icons/Headset';
import FlightIcon from '@material-ui/icons/Flight';
import HealthAndSafetyIcon from '@material-ui/icons/VerifiedUser';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';

function Services() {
  return (
    <div className='services-container'>
        <div className='easy-payment'>
            <div className='left'>
                <h1>KadPay</h1>
                <h2>Easy Payment Services</h2>
                <p>Top up phone airtime or internet data. Pay electricity bills; <br/> renew TV subscriptions.
                 Transfer money, pay education bills, <br/> transfer funds and do more ...</p>
                 <div className='services-link'>
                     <img src= {mobile} alt = 'mobile' />
                     <img src= {wifi} alt = 'wifi' />
                     <img src= {tv} alt = 'tv' />
                     <img src= {bulb} alt = 'bulb' />
                 </div>
            </div>
            <div className='right'>
                <img src={person}  />
            </div>

        </div>
            <div className='services' >
                <h1>We Provide Awesome <span className='color'>Services</span> </h1>
                <p>Certain things are hard; making payments shouldn't be one of them. KadPay.com helps you make payments
                for services you enjoy right from the comfort of your home or office. The experience of total convenience,
                fast service delivery and easy payment is just at your fingertips.</p>

                <div className='services-listing'>
                    <Link to= '/services/airtime'>
                        <div> 
                                <p>Buy phone Airtime</p>
                                <p>MTN VTU</p>
                                <p>GLO VTU</p>
                                <p>AIRTEL VTU</p>
                                <p>9MOBILE VTU</p>
                                <ArrowRight /> <ArrowRight />
                        </div>
                    </Link>
                    <Link to = '#'>
                        <div>
                            <p>Buy Internet Data</p>
                            <p>MTN DATA</p>
                            <p>GLO DATA</p>
                            <p>AIRTEL DATA</p>
                            <p>9MOBILE DATA</p>
                            <p>SMILE DATA</p>
                            <ArrowRight /> <ArrowRight />
                     </div>
                    </Link>

                <Link to= '/services/tvsub'>
                    <div>
                        <p>Pay TV Subs</p>
                        <p>GOTV</p>
                        <p>DSTV</p>
                        <p>STARTIMES</p>
                        <p>SHOWMAX</p>
                        <ArrowRight /> <ArrowRight />
                    </div>
                </Link>
                <Link to = '/services/electricity'>
                    <div>
                        <p>Pay Electricity Bill</p>
                        <p>PHED</p>
                        <p>AEDC</p>
                        <p>IKEDC</p>
                        <p>EKEDC</p>
                        <p>KEDCO</p>
                        <p>IBEDC</p>
                        <p>JEDpLc</p>
                        <p>KAEDCO</p>
                        <ArrowRight /> <ArrowRight />
                    </div>
                </Link>
                </div>
            </div>

            <div className='why-kadpay' >
                <h1>Why <span className='color'>KadPay?</span> </h1>
                <p> KadPay.com is world's top payment platform providing fast, easy online payment solution for millions of
                    people. We are impacting lives by ensuring payments for day-to-day services you enjoy are
                    stress-free. With KadPay.com, you can perform quick transactions anytime and anywhere using any device.</p>
                <div>
                    <div className='left'>
                        <img src= { service } />
                    </div>
                    <div className='right'>
                        <div>
                            <div className='header'>
                            <HeadsetIcon className = 'color' />
                            <p>Excellent Customer Support</p>
                            </div>
                            <p>Our well trained customer support agents are always available 24/7 to help you resolve any issues. 
                            We provide you with multiple ways to reach us and get fast help.</p>
                        </div>
                        <div>
                            <div className='header'>
                            <FlightIcon className = 'color' />
                            <p>Fast Service Delivery</p>
                            </div>
                            <p>Our well trained customer support agents are always available 24/7 to help you resolve any issues. 
                            We provide you with multiple ways to reach us and get fast help.</p>
                        </div>
                        <div>
                            <div className='header'>
                            <HealthAndSafetyIcon className = 'color' />
                            <p>Fast, Secured Payment</p>
                            </div>
                            <p>Our well trained customer support agents are always available 24/7 to help you resolve any issues. 
                            We provide you with multiple ways to reach us and get fast help.</p>
                        </div>
                        <button>Discover More</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Services