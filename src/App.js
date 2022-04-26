import './App.css';
import logo from './images/logo-noBg.png'
import youthlogo from './images/youthlogo.png'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import 'slick-carousel/slick/slick.css'; 
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import FlipCountdown from '@rumess/react-flip-countdown';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import RParish from './pages/RParish';
import Rdelegate from './pages/Rdelegate';

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
      
        <Router>
        <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/registerparish' element={<RParish/>}/>
            <Route path='/registerdelegate' element={<Rdelegate/>}/>

          </Routes>
        </Router>

      </div>
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
