import Header from './elements/Header';
import Decor from './elements/Decor';
import ContactForm from './ContactForm'


function HomeContactUs() {

    return (
        <section className='contact' id='home-contact'>
            <div className='right-column'>        
                <div className='contact-header'>    
                    <Header contents='Skontaktuj się z nami' />
                    <Decor />
                </div>
                <ContactForm />
            </div>    
            <div className='footer'>
                <span>Copyright by Krzysztof Korbiński</span>
                <div className='icons'>
                    <div className='facebook'></div>
                    <div className='instagram'></div>
                </div>
            </div>
        </section>
    )
}

export default HomeContactUs;