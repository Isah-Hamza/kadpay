import React from 'react';
import './home.css'
import about from '../../images/img/about-us.jpg';

const Home = () => {
  return (
    <div className='home-container'>
        <p>Welcome <span className='user'>{'Guest'}</span>, Hope you enjoy our services!!!</p>
        {/* <p>Welcome {'Guest'}, Your Login was Successful!</p> */}
        <div className='user-details'>

            <div>
                <p>Wallet</p>
                <p>$0.00</p>
            </div>
            <div>
                <p>Profit</p>
                <p>$0.00</p>
            </div>
            <div>
                <p>Ref Bonus</p>
                <p>$0.00</p>
            </div>
            <div>
                <p>Total Balance</p>
                <p>$0.00</p>
            </div>
            <div>
                <p>Account Type</p>
                <p>Basic</p>
            </div>
        </div>
        <div className='youtube-video'>
            <p>Still don't understand how we work? Watch our 1min Video on Youtube...</p>
            {/* <img src = {about} alt='' /> */}
            <iframe src='https://www.youtube.com/embed/A-ENjgtnqds' ></iframe>
        </div>
        <div className='transactions'>
        <p> Transactions on your account </p>
        <div style={{overflowX:'scroll', padding:'5px 5px 20px'}} className = 'table'>
            <table border = '1px'>
                <thead>
                    <tr>
                        <th>s/n</th>
                        <th>Service</th>
                        <th>Amount deducted</th>
                        <th>Transaction ID</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Airtime</td>
                        <td>2000</td>
                        <td>877797737789</td>
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
                        <td>Electricity Bill</td>
                        <td>5600</td>
                        <td>503719549670</td>
                        <td>pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}

export default Home