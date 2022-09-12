import '../scss/HomeHeader.scss';
import { HashLink as Link} from 'react-router-hash-link';

function HomeHeader() {
    return (
        <section className='header' id='home-header'>
            
            <div className='image' />
            
            <div className='content'>
                
                <div className='nav'>
                    <nav className='nav-pages'>
                        <Link to='/login'>Zaloguj</Link>
                        <Link to='/register'>Załóż konto</Link>
                    </nav>

                    <nav className='nav-home'>
                        <Link to='#home-header' smooth>Start</Link>
                        <Link to='#home-columns' smooth>O co chodzi?</Link>
                        <Link to='#home-about' smooth>O nas</Link>
                        <Link to='#home-help' smooth>Fundacje i     organizacje</Link>
                        <Link to='#home-contact' smooth>Kontakt</   Link>
                    </nav>
                </div>

                <div className='help'>
                    <h1>Zacznij pomagać!<br></br>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className='decoration'></div>
                    <div className='buttons'>
                        <Link to='/login' className='button'><span>ODDAJ RZECZY</span></Link>
                        <Link to='/login' className='button'><span>ZORGANIZUJ ZBIÓRKĘ</span></Link>
                    </div>
                </div>

            </div> 
        </section>

        

    
    )
}

export default HomeHeader;