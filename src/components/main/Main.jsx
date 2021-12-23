import './main.css';

import React from 'react';
import facebook from '../../images/facebook.png';
import twitter from '../../images/download.png';

function Main() {
    return (
        <div className='main'>
            <div className='best-coin'>
                <a href=''>Advertise with us</a>
                <h1>best coins today</h1>
                <h2>Find the top voted coins of the last 24 hours</h2>
            </div>
            <div className='promoted'>
                <p style={{fontSize:'22px',fontWeight:'bold',opacity:'.5'}}>Promoted</p>
                <a href=''>Your coin here? Contact us</a>
            </div>
            <p className='is-shown-mobile' >Click on your favorite coin to vote for it</p>
            <div className='coin-table'>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Name</th>
                            <th className='is-hidden-mobile'>Chain</th>
                            <th className='is-hidden-mobile'>Symbol</th>
                            <th className='is-hidden-mobile'>Market Cap</th>
                            <th className='is-hidden-mobile'>Price</th>
                            <th className='is-hidden-mobile'>Launch</th>
                            <th>Votes</th>
                            <th className='is-hidden-tablet'>Vote</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>1</td>
                            <td><img src={facebook} alt = 'facebook' /></td>
                            <td>Little Baby Doge</td>
                            <td className='is-hidden-mobile'><span className='chain'>BSC</span></td>
                            <td className='is-hidden-mobile'>LBD</td>
                            <td className='is-hidden-mobile'>$21,999,000</td>
                            <td className='is-hidden-mobile'>$0.000000000324</td>
                            <td className='is-hidden-mobile'>21 days</td>
                            <td><span className='votes'>28,877</span></td>
                            <td className = 'is-hidden-tablet'><button>Vote</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><img src = {twitter} alt = 'twitter' /></td>
                            <td>Lunar</td>
                            <td className='is-hidden-mobile'><span className='chain'>BSC</span></td>
                            <td className='is-hidden-mobile'>LNR</td>
                            <td className='is-hidden-mobile'>$11,896,000</td>
                            <td className='is-hidden-mobile'>$0.000000001118</td>
                            <td className='is-hidden-mobile'>1 month</td>
                            <td><span className='votes'>14,663</span></td>
                            <td className = 'is-hidden-tablet'><button>Vote</button></td>
                        </tr> 
                        <tr>
                            <td>3</td>
                            <td><img src={facebook} alt = 'facebook' /></td>
                            <td>Meta Decentraland</td>
                            <td className='is-hidden-mobile'><span className='chain'>BSC</span></td>
                            <td className='is-hidden-mobile'>MDL</td>
                            <td className='is-hidden-mobile'>$11,896,000</td>
                            <td className='is-hidden-mobile'>$0.000000001118</td>
                            <td className='is-hidden-mobile'>1 day</td>
                            <td><span className='votes'>159261</span></td>
                            <td className = 'is-hidden-tablet'><button>Vote</button></td>
                        </tr> 
                        <tr>
                            <td>4</td>
                            <td><img src = {twitter} alt = 'twitter' /></td>
                            <td>Gold Coin</td>
                            <td className='is-hidden-mobile'><span className='chain'>BSC</span></td>
                            <td className='is-hidden-mobile'>GLD</td>
                            <td className='is-hidden-mobile'>$11,896,000</td>
                            <td className='is-hidden-mobile'>$0.000000001118</td>
                            <td className='is-hidden-mobile'>15 days</td>
                            <td><span className='votes'>12,663</span></td>
                            <td className = 'is-hidden-tablet'><button>Vote</button></td>
                        </tr> 
                        <tr>
                            <td>5</td>
                            <td><img src = {facebook} alt = 'facebook' /></td>
                            <td>Crypto Jackpot</td>
                            <td className='is-hidden-mobile'><span className='chain'>BSC</span></td>
                            <td className='is-hidden-mobile'>CJP</td>
                            <td className='is-hidden-mobile'>$13,896,000</td>
                            <td className='is-hidden-mobile'>$0.000000001118</td>
                            <td className='is-hidden-mobile'>2 months</td>
                            <td><span className='votes'>13,663</span></td>
                            <td className = 'is-hidden-tablet'><button>Vote</button></td>
                        </tr> 
                        <tr>
                            <td>6</td>
                            <td><img src = {twitter} alt = 'facebook' /></td>
                            <td>Evolution</td>
                            <td className='is-hidden-mobile'><span className='chain'>BSC</span></td>
                            <td className='is-hidden-mobile'>EVL</td>
                            <td className='is-hidden-mobile'>$13,896,000</td>
                            <td className='is-hidden-mobile'>$0.000000001118</td>
                            <td className='is-hidden-mobile'>16 days</td>
                            <td><span className='votes'>13,663</span></td>
                            <td className = 'is-hidden-tablet'><button>Vote</button></td>
                        </tr> 
                        <tr>
                            <td>7</td>
                            <td><img src = {facebook} alt = 'facebook' /></td>
                            <td>Around</td>
                            <td className='is-hidden-mobile'><span className='chain'>BSC</span></td>
                            <td className='is-hidden-mobile'>ARN</td>
                            <td className='is-hidden-mobile'>$13,896,000</td>
                            <td className='is-hidden-mobile'>$0.000000001118</td>
                            <td className='is-hidden-mobile'>2 months</td>
                            <td><span className='votes'>13,663</span></td>
                            <td className = 'is-hidden-tablet'><button>Vote</button></td>
                        </tr> 
                    </tbody>
                </table>
            </div>
            <div className='favorite-coin-missing'> 
                <div className='submit-coin'>
                    <h2>Your Favorite Coin Missing?</h2>
                    <p>
                        Can't find your coin? List your favorite coin now! <br/> 
                        Get your community to vote for your coin and gain exposure.
                    </p>
                    <button>Submit Coin</button>
                </div>
                <div className='new-listings'>
                <h2>View New Listings</h2>
                    <p>
                        Click the button below to view the New Listings! <br/> 
                        These coins were just submitted.
                    </p>
                    <button>View New Listings</button>
                </div>
            </div>
            <div className='about-info'>
                <div className='new-crypto-project'>
                    <h1>Find the best new cryptocurrency projects</h1>
                    <p>Did you ever wonder where people find the best new cryptocurrency projects, coins and 
                    tokens like Doge and Shiba inu? They use websites like <a href=''> coinexport.com</a>. 
                    Cryptocurrency projects are listed here before coinMarketCap, CoinGecko and mojore 
                    exchanges. Find the best crypto moonshots on our website.
                    </p>
                    <p>
                        However: before investing, always do your own research. Listing on <a href=''> coinexport.com</a>  
                        &nbsp; does NOT mean we endorse the project. They could be scams. Be careful with your 
                        investment.
                    </p>
                </div>
                <div className='coinexporter-work'>
                    <h1>How does CoinExporter works?</h1>
                    <p>New cryptocurrency project can be listed by <a href=''>Applying Here</a>. 
                    Once applied, they instantly become visible on the <a href=''> New Listings Page</a>. 
                    New Listings require 50 votes to be officially listed in our top list. After that, anyone
                    can see and vote for the project.
                    </p>
                    <p>Get your community to vote on your project, because vote matters! Our ranking is simple:
                    the highest voes is #1 on our website. The project will get exposure with all our visitors</p>
                    <p><b>Note on voting</b> Unique votes only count once for the 'All Time' page, but can count every 24 hours 
                    on the "Today's page."</p>
                </div>
            </div>
        </div>
    )
}

export default Main
