import React from 'react';
import '../scss/HomeHeader.scss';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';

function HomeHeader() {
    return (
        <section className='header' id='home-header'>
            <p>abc</p>
            <BrowserRouter>
                <p>123</p>
                <Link to='./HomeHeader#home-header' smooth>Start</Link>
                <Link to='/HomeThreeColumns#home-columns' smooth>O co chodzi?</Link>
                <Link to='#home-about' smooth>O nas</Link>
                <Link to='#home-help' smooth>Fundacje i organizacje</Link>
                <Link to='#home-contact' smooth>Start</Link>
            </BrowserRouter>
        </section>
    )
}

export default HomeHeader;