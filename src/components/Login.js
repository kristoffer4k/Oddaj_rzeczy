import LoginForm from './LoginForm'
import Nav from './elements/Nav'
import Header from './elements/Header';
import Decor from './elements/Decor';

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
            </div>
        </section>
    )
}

export default Login;