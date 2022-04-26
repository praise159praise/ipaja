import React from 'react'
import Carousel from '../components/Carousel'
import FlipCountdown from '@rumess/react-flip-countdown'
import { Link } from 'react-router-dom'

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

                <Link to='/registerparish'><div>Register Parish</div></Link>
                <Link to='/registerdelegate'><div>Register Delegate</div></Link>

            </div>
        </div>
    )
}

export default Home