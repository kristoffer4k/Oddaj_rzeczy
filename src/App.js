import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import './scss/main.scss'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;