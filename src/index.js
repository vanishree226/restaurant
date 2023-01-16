import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Aboutus from 'Pages/Aboutus';
import Pricing from 'Pages/Pricing';
import Contactus from 'Pages/Contactus';
import Nopage from 'Pages/Nopage';
import Order from 'Pages/Reviews';
import Feedback from 'Pages/Feedback';
import Home from 'Components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Contactus' element={<Contactus/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Feedback' element={<Feedback/>}/>
//         <Route path='*' element={<Nopage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
