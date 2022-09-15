import Decor from './elements/Decor';
import Header from './elements/Header';

function HomeWhoWeHelp() {
    return (
        <section className='help' id='home-help'>
            <Header contents='Komu pomagamy?' />
            <Decor />
            <div className='menu'>
                
                <span>Fundacjom</span>
                <span>Oragnizacjom pozarządowym</span>
                <span>Lokalnym zbiórkom</span>
            </div>
            <div className='foundations'>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, 
                    z którymi współpracujemy. Możesz sprawdzić czym się zajmują, 
                    komu pomagają i czego potrzebują.
                </p>
                <div className='first-foundation foundation'>
                    <div className='left-column'>
                        <span className='name'>Fundacja “Dbam o Zdrowie”</span>
                        <span className='target'>Cel i misja: Pomoc osobom 
                        znajdującym się w trudnej sytuacji życiowej.</span>
                    </div>
                    <span className='stuff'>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                </div>

                <div className='second-foundation foundation'>
                    <div className='left-column'>
                        <span className='name'>Fundacja “Dla dzieci”</span>
                        <span className='target'>Cel i misja: Pomoc dzieciom 
                        z ubogich rodzin.</span>
                    </div>
                    <span className='stuff'>ubrania, meble, zabawki</span>
                </div>

                <div className='third-foundation foundation'>
                    <div className='left-column'>
                        <span className='name'>Fundacja “Bez domu”</span>
                        <span className='target'>Cel i misja: Pomoc dla 
                        osób nie posiadających miejsca zamieszkania.</span>
                    </div>
                    <span className='stuff'>ubrania, jedzenie, ciepłe koce</span>
                </div>
                <div className='numbers'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
            </div>
        </section>
    )
}

export default HomeWhoWeHelp;