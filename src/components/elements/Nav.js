import { HashLink as Link} from 'react-router-hash-link';

export default function Nav() {
  return (
<div className='nav'>
    <nav className='nav-pages'>
        <Link to='/login'>Zaloguj</Link>
        <Link to='/register'>Załóż konto</Link>
    </nav>
    <nav className='nav-home'>
        <Link to='/#home-header' smooth>Start</Link>
        <Link to='/#home-columns' smooth>O co chodzi?</Link>
        <Link to='/#home-about' smooth>O nas</Link>
        <Link to='/#home-help' smooth>Fundacje i organizacje</Link>
        <Link to='/#home-contact' smooth>Kontakt</   Link>
    </nav>
</div>
  )
}


