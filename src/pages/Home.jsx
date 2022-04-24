import React from 'react'
import Carousel from '../components/Carousel'
import FlipCountdown from '@rumess/react-flip-countdown'
const Home = () => {
    return (
        <div className='container' >
            <Carousel />
            <div className='timer'>
                <FlipCountdown
                    hideYear
                    hideMonth
                    dayTitle='Days'
                    hourTitle='Hours'
                    minuteTitle='Minutes'
                    secondTitle='Seconds'

                    size='small'
                    titlePosition='bottom' // Options (Default: top): top, bottom.
                    endAt={'2022-07-19 01:26:58'} // Date/Time
                />
            </div>
            <div className='buttons'>

                <div>Register Parish</div>
                <div>Register Delegate</div>

            </div>
        </div>
    )
}

export default Home