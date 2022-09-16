import Header from './elements/Header';
import Decor from './elements/Decor';

function HomeContactUs() {
    return (
        <section className='contact' id='home-contact'>
            <div className='right-column'>        
                <div className='contact-header'>    
                    <Header contents='Skontaktuj się z nami' />
                    <Decor />
                    <div className='contact-form'>Formularz</div>
                </div>
            </div>    
            <div className='footer'>
                <span>Copyright by Coders Lab</span>
                <div className='icons'>
                    <div className='facebook'></div>
                    <div className='instagram'></div>
                </div>
            </div>
        </section>
    )
}

export default HomeContactUs;