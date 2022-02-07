import React,{ useState, useRef, useEffect} from 'react';
import './landing.css';
import mobileAppIcon from '../../images/img/mobileAppIcon-removebg-preview.png';
import google from '../../images/img/playstore.png';
import apple from '../../images/img/apple.png';
import airtime from '../../images/img/airtime.png';
import paybills from '../../images/img/paybills.png';
import secure from '../../images/img/secure.png';
import slantphone from '../../images/img/slanthpne.png';
import dullbaby from '../../images/img/dullbaby.png';
import comfort from '../../images/img/comfort.png';
import review1 from '../../images/review1.jpg';
import review2 from '../../images/review2.jpg';
import slant_and_portrait from '../../images/img/slant and portrait.png';


function Landing() {

    const [ reviewsLeft, setReviewsLeft ] = useState('51%');
    const reviewsRef = useRef();

    const changeLeft = () => {
        reviewsRef.current.style.left = reviewsLeft;
    }
    
    window.addEventListener('resize', () => {
        
    })

    useEffect(() => {
        if( window.innerWidth <= 500 ){
            changeLeft();
            const timer = setTimeout(() => {
                reviewsLeft == '51%' ? setReviewsLeft('-51%') : setReviewsLeft('51%')
            }, 5000);
            return () => {
                clearTimeout(timer);
            }
        }

        //check using resize event listener to see if the browser had been resized to a width below 500
        window.addEventListener('resize', () => {
            if( window.innerWidth <= 500 ){
                changeLeft();
                const timer = setTimeout(() => {
                    reviewsLeft == '51%' ? setReviewsLeft('-51%') : setReviewsLeft('51%')
                }, 5000);
                return () => {
                    clearTimeout(timer);
                }
            }
        })
      
    });
    
    useEffect(() => {
            if( window.innerWidth > 500 ) {
                setReviewsLeft('unset');
                changeLeft();
                console.log('reviews left called');
                return
            }
            
            window.addEventListener('resize', () => {
                if( window.innerWidth > 500 ) {
                    setReviewsLeft('unset');
                    changeLeft();
                    console.log('reviews left called');
                    return
                }
            })
            return;
            
});

  return <div className='landingpage-container'>
    <div className='firstlayer'>
        <div className='left'>
            <h1>Pay Smarter, Pay Better <br /> and Pay <span className='primary-color'>Faster</span> </h1>
            <p style={{marginBottom:30}}>KadPay gives you the option to pay in an easier, <br/>
            faster, smater and more securely from the <br/> comfort of your room </p>
           <p > Pay Smarter, Pay Better and Pay Faster <br/>
            KadPay gives you the option to pay in an easier, <br/>
            faster, smater and more securely from the <br/> comfort of your room
            </p>
            <div className='buttons'>
                <button className='google-play'>
                    <img src={google}/>
                    <div>
                        <p>Get it on</p>
                        <p>Google Play</p>
                    </div>
                </button>

                <button className='google-play'>
                    <img src={apple}/>
                    <div>
                        <p>Get it on</p>
                        <p>Play Store</p>
                    </div>
                </button>
            </div>
        </div>
        <div className='right'>
            <img src={mobileAppIcon} alt = 'mobile=app icon'/>
        </div>
    </div>
    <div className='services'>
        <div className='service-card'>
            <img src={secure} alt = 'service'/>
            <h3>Send and Receive Money</h3>
            <p>Pay to business partners, clients, familes and friends with so much
            ease and comfort. Pay to business partners, clients, familes and friends with so much
            ease and comfort</p>
        </div>
        <div className='service-card'>
            <img src={airtime} alt = 'service'/>
            <h3>Top up</h3>
            <p>Pay to business partners, clients, familes and friends with so much
            ease and comfort. Pay to business partners, clients, familes and friends with so much
            ease and comfort</p>
        </div>
        <div className='service-card'>
            <img src={paybills} alt = 'service'/>
            <h3>Pay Bills</h3>
            <p>Pay to business partners, clients, familes and friends with so much
            ease and comfort. Pay to business partners, clients, familes and friends with so much
            ease and comfort</p>
        </div>
        <div className='service-card'>
            <img src={secure} alt = 'service'/>
            <h3>Fast and Secure</h3>
            <p>Pay to business partners, clients, familes and friends with so much
            ease and comfort. Pay to business partners, clients, familes and friends with so much
            ease and comfort</p>
        </div>
        <div className='service-card'>
            <img src={secure} alt = 'service'/>
            <h3>Send and Receive Money</h3>
            <p>Pay to business partners, clients, familes and friends with so much
            ease and comfort. Pay to business partners, clients, familes and friends with so much
            ease and comfort</p>
        </div>
        <div className='service-card'>
            <img src={airtime} alt = 'service'/>
            <h3>Top up</h3>
            <p>Pay to business partners, clients, familes and friends with so much
            ease and comfort. Pay to business partners, clients, familes and friends with so much
            ease and comfort</p>
        </div>
    </div>
    
    <div className='row'>
        <div className='first'>
            <div className='left'>
                <img src={comfort}/>
            </div>
            <div className='right'>
                <h3>Pay with so much <br/> <span className='primary-color'>Comfort</span></h3>
                <p>Pay business partners , clients, family and friends
                with so much ease and comfort
                Pay business partners , clients, family and friends
                with so much ease and comfort
                Pay business partners , clients, family and friends
                with so much ease and comfort
                </p>
            </div>
        </div>
        <div className='second'>
            <div className='left'>
                <h3>Get the mobile app <br/> installed <span className='primary-color'>today</span> </h3>
                <p>You can download our robust mobile application from iOS AppStore
                and google's PlayStore Pay business partners , clients, family and friends
                with so much ease and comfort
                </p>
                <div className='buttons'>
                <button className='google-play'>
                    <img src={google}/>
                    <div>
                        <p>Get it on</p>
                        <p>Google Play</p>
                    </div>
                </button>

                <button className='google-play'>
                    <img src={apple}/>
                    <div>
                        <p>Get it on</p>
                        <p>Play Store</p>
                    </div>
                </button>
            </div>
            </div>
            <div className='right'>
                <img src={slant_and_portrait}/>
            </div>
        </div>
        <div className='third'>
            <div className='left'>
                <img src={comfort}/>
            </div>
            <div className='right'>
                <h3>Pay your bills with just <br/> a single <span className='primary-color'>click</span> </h3>
                <p>We provide you with a  better and faster way to pay your bills such
                as electricity, NEPA , TV Subscription and alot more
                with so much ease and comfort
                Pay business partners , clients, family and friends
                with so much ease and comfort
                Pay business partners , clients, family and friends
                with so much ease and comfort
                </p>
            </div>
        </div>
    </div>
    <div className='customer-reviews'>
        <h1>What people are <span className='primary-color'>saying</span> </h1>
        <p>We are trusted by millions around the globe</p>
        <div className='reviews' ref={reviewsRef}>
            <div className='review'>
                <div className='body'>
                <div className='top-circle'></div>
                <div className='arrow-down'></div>
                <p> I will definitely give KadPay a 5 star rating. I have been using the service for the past 5 years
                company established by a group of professional, who have fore seen the future of International Capital Market.
                The company has direct contracts </p>
                </div>
                <div className='image'>
                    <img src={review1}/>
                    <span>John Doe</span>
                </div>
            </div>
            <div className='review'>
                <div className='body'>
                <div className='top-circle'></div>
                <div className='arrow-down'></div>
                <p> KadPay, i would say is currently the best platform where you can make payments seamlessly . They are reliable and efficient
                company established and  seen the future of International Capital Market.
                The company has direct contracts </p>
                </div>
                <div className='image'>
                    <img src={review2}/>
                    <span>Grace Clara</span>
                </div>
            </div>
        </div>
            <div className='indicator'>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
    </div>
    <div className='subscribe'>
        <h1>Subscribe to our <span className='primary-color'>Newsletter</span> </h1>
        <p>Be the first to receive news about KadPay</p>
        <div>
            <input type='email' placeholder='Your Email Address Here...' />
            <button>Subscribe</button>
        </div>
    </div>
  </div>;
}

export default Landing;
