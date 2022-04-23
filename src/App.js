import './App.css';
import logo from './images/logo-noBg.png'
import youthlogo from './images/youthlogo.png'

// import 'slick-carousel/slick/slick.css'; 
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import FlipCountdown from '@rumess/react-flip-countdown';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <div className='main'>
        <div className='headerArea'>
          <img src={logo} height={150}className='logo'/>
          <div className='headerText'><p>CATHOLIC YOUTH ORGANIZATION OF NIGERIA (CYON)</p>
          <p>Archdiocese of lagos</p></div>
          <img src={youthlogo} height={100} className='logo'/>

        </div>
        <Nav/>
        <div className='container' >
          <Carousel/>
          <div className='timer'>
          <FlipCountdown
                hideYear
                hideMonth
                dayTitle='Days'
                hourTitle='Hours'
                minuteTitle='Minutes'
                secondTitle='Seconds'

                size='medium'
                titlePosition='bottom' // Options (Default: top): top, bottom.
                endAt={'2022-04-25 01:26:58'} // Date/Time
            />
          </div>
          <div className='buttons'>
         
            <div>Register Parish</div>
            <div>Register Delegate</div>

          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default App;
