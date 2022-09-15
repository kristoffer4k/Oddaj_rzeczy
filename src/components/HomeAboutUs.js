import Decor from './elements/Decor';
import Header from './elements/Header';

function HomeAboutUs() {
    return (
        <section className='about' id='home-about'>
            <div className='description'>
            <Header contents='O nas' />
                <Decor />
                <div className='text'>
                    <p>Nori grape silver beet broccoli kombu beet 
                       greens fava bean potato quandong celery. 
                       Bunya nuts black-eyed pea prairie turnip 
                       leek lentil turnip greens parsnip.</p>
                    <div className='signature' />
                </div>
            </div>
            <div className='people' />
        </section>
    )
}

export default HomeAboutUs;