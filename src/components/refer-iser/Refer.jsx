import React from 'react';
import  './refer.css';

import Person from '@material-ui/icons/Person';

const Refer = () => {
  return (
    <div className='refer-container'>
 <h1>Refer users to kadpay Community</h1>

<div class="refer">
    <p>You can refer users by sharing your reference link:</p>
    <p class="reference-link">https://www.kadpay.com/ref/abcd1234</p>
      <div class="sponsor">
          <p>Your sponsor</p>
          <Person />
          <p class="sponsor-name">null</p>
      </div>
</div>

  <div class="record">
      <p class="referrers">Your referrers</p>
      <div class="head">
          <p style={{marginLeft:"100px"}}>Show <input type="number" name="" value="10" min="10" step="5" list="5"  max="30" id="" /> entries</p>
          <div class="search">
              <span>Search</span>
              <input type="search" name="search" id="search" />
          </div>
      </div>
      <div class="table">
        <div>
            <table border = '1px'>
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Ref. Level</th>
                        <th>Parent</th>
                        <th>Client Status</th>
                        <th>Date Registered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td colspan="5" style= {{textAlign:"center"}}>No data available in table</td></tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
          <div class="foot">
              <p class="entries">Showing 0 to 0 of 0 entries</p>
              <div class="buttons">
                  <button class="prev">Previous</button>
                  <button class="next">Next</button>
              </div>
          </div>
      </div>
  </div>

    </div>
  )
}

export default Refer