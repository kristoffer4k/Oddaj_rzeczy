import RegisterForm from './RegisterForm'
import Nav from './elements/Nav'
import Header from './elements/Header';
import Decor from './elements/Decor';

function Register() {
  return (
    <section className="register" id="register-id">
      <div className="navigation">
        <Nav />
      </div>
      <div className="content">
        <Header contents="Załóż konto" />
        <Decor />
        <div className="register-form">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}

export default Register;
