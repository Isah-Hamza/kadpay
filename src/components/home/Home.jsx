import React from 'react';
import './home.css';

import { Redeem, Autorenew, MonetizationOn, AccountBox } from '@material-ui/icons'

const Home = () => {
  return (
    <div className='home-container'>
        <p>Welcome <span className='user'>{'Guest'}</span>, Hope you enjoy our services!!!</p>
        {/* <p>Welcome {'Guest'}, Your Login was Successful!</p> */}
        <div className='user-details'>

            <div>
                <MonetizationOn />
                <div>
                <p>Wallet</p>
                <p>$0.00</p>
                </div>
            </div>
            <div>
                <MonetizationOn />
                <div>
                <p>Profit</p>
                <p>$0.00</p>
                </div>
            </div>
            <div>
                <Autorenew />
                <div>
                <p>Ref Bonus</p>
                <p>$0.00</p>
                </div>
            </div>
            <div>
                <MonetizationOn />
                <div>
                <p>Total Balance</p>
                <p>$0.00</p>
                </div>
            </div>
            <div>
                <AccountBox />
                <div>
                <p>Account Type</p>
                <p>Merchant</p>
                </div>
            </div>
        </div>
        <div className='youtube-video'>
            <p>Still don't understand how we work? Watch our 1min Video on Youtube...</p>
            {/* <img src = {about} alt='' /> */}
            <iframe src='https://www.youtube.com/embed/A-ENjgtnqds' ></iframe>
        </div>
        <div className='transactions'>
        <p> Transactions on your account </p>
        <div style={{overflowX:'auto', padding:'5px 5px 20px'}} className = 'table'>
            <table border = '1px'>
                <thead>
                    <tr>
                        <th>s/n</th>
                        <th>Service</th>
                        <th> Amount </th>
                        <th>Transaction ID</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Transfer</td>
                        <td>5500</td>
                        <td>746849373647</td>
                        <td>completed</td>
                    </tr>


                    <tr>
                        <td>2</td>
                        <td>Data</td>
                        <td>1500</td>
                        <td>233978473874</td>
                        <td>completed</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Electricity</td>
                        <td>5600</td>
                        <td>503719549670</td>
                        <td>pending</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Airtime</td>
                        <td>2000</td>
                        <td>877797737789</td>
                        <td>completed</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}

export default Home