import { HashLink as Link} from 'react-router-hash-link';

function HomeSimpleSteps() {
    return (
        <section className='steps' id='home-steps'>
            <h1>Wystarczą 4 proste kroki</h1>
            <div className='decoration'></div>
            <ul className='steps-columns'>
                <li className='column first-column'>
                    <div className='icon first-icon'></div>
                    <span className='tittle'>Wybierz rzeczy</span>
                    <hr className='line'></hr>
                    <p className='text'>ubrania, zabawki, sprzęt i inne</p>
                </li>
                <li className='column second-column'>
                    <div className='icon second-icon'></div>
                    <span className='tittle'>Spakuj je</span>
                    <hr className='line'></hr>
                    <p className='text'>skorzystaj z worków na śmieci</p>
                </li>
                <li className='column third-column'>
                    <div className='icon third-icon'></div>
                    <span className='tittle'>Zdecyduj komu<br></br> chcesz pomóc</span>
                    <hr className='line'></hr>
                    <p className='text'>wybierz zaufane miejsce</p>
                </li>
                <li className='column fourth-column'>
                    <div className='icon fourth-icon'></div>
                    <span className='tittle'>Zamów kuriera</span>
                    <hr className='line'></hr>
                    <p className='text'>kurier przyjedzie w dogodnym terminie</p>
                </li>
            </ul>
            <Link to='/login' className='button'><span>ODDAJ RZECZY</span></Link>
        </section>
    )
}

export default HomeSimpleSteps;