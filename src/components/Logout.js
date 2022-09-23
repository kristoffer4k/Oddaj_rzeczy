import { HashLink as Link } from "react-router-hash-link";
import Nav from './elements/Nav'
import Header from './elements/Header';
import Decor from './elements/Decor';

function Logout() {
  return (
    <section className="logout" id="logout-id">
      <div className="navigation">
        <Nav />
      </div>
      <div className="content">
        <Header contents="Wylogowanie nastąpiło pomyślnie!" />
        <Decor />
        <Link to="/" className="start-button">Strona główna</Link>
      </div>
    </section>
  );
}

export default Logout;