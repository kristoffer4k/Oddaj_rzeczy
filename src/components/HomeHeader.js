import Button from './elements/Button';
import Nav from './elements/Nav';
import Decor from './elements/Decor';


function HomeHeader() {
    return (
        <section className='header' id='home-header'>
            <div className='image' />
            <div className='content'>
                <Nav />
                <div className='start-help'>
                    <h1>Zacznij pomagać!<br></br>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <Decor />
                    <div className='buttons'>
                        <Button contents='ODDAJ RZECZY' />
                        <Button contents='ZORGANIZUJ ZBIÓRKĘ' />
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default HomeHeader;