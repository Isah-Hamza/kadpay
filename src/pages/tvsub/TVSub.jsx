import React from 'react'
import './tvsub.css'

import dstv from '../../images/img/dstv.jpg';
import go from '../../images/img/go.jpg';
import startime from '../../images/img/glo.jpg';
import showmax from '../../images/img/showmax.jpg';


function TVSub() {
  return (
    <div className='tvsub-container'>
        <h2>TV Subscription</h2>
        <p>Make payment for TV subscription - DSTV, GOTV, Startimes and Showmax</p>

        <div className='tvsub-services'>
            <div>
                <img src= { dstv } />
                <div>
                    <p>DSTV Subscription</p>
                    <p>Choose from a range of DStv bouquets for your entertainment. Easy payment, quick value delivery.</p>
                </div>
            </div>

            <div>
                <img src= { go } />
                <div>
                    <p>GOtv Subscription</p>
                    <p>Choose from a range of GOtv bouquets for your entertainment. Easy payment, quick value delivery.</p>
                </div>
            </div>

            <div>
                <img src= { startime } />
                <div>
                    <p>Startimes Subscription</p>
                    <p>Choose from a range of STARTIMES bouquets for your entertainment. Easy payment, quick value delivery.</p>
                </div>
            </div>

            <div>
                <img src= { showmax } />
                <div>
                    <p>Showmax Subscription</p>
                    <p>Choose from a range of SHOWMAX bouquets for your entertainment. Easy payment, quick value delivery.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TVSub