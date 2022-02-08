import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// import pages
import Home from './Home'
import Contact from './components/Contact'
import Login from "./components/Login"
// Router
const router = 
<Router>
  <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/contact' element={ <Contact /> } />
    <Route path='/login' element={ <Login /> } />
  </Routes>
</Router> 

ReactDOM.render( router,document.getElementById('root') );
reportWebVitals();