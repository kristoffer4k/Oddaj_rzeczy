import LoginForm from './LoginForm'
import Nav from './elements/Nav'
import Header from './elements/Header';
import Decor from './elements/Decor';
import { HashLink as Link} from 'react-router-hash-link';

function Login() {
    return (
        <section className='login' id='login-id'>
            <div className='navigation'>
                <Nav />
            </div>
            <div className='content'>
                <Header contents='Zaloguj się' />
                <Decor />
                <div className='login-form'>
                    <LoginForm />
                </div>
                <div className='buttons'>
                    <Link to='/register'>Załóż konto</Link>
                    <Link to='/login'>Zaloguj się</Link>
                </div>
            </div>
        </section>
    )
}

export default Login;