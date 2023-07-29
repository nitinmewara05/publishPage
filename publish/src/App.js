import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './component/Home';
import Login from './component/Login';
import Pcard from './component/Pcard'
import Cart from './component/Cart';
import Productlist from './component/Productlist';
function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path = "/Login" element ={<Login/>}/>
  <Route path='Pcard' element = {<Pcard/>}/>
    <Route path="/" element={<Home/>}>
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Productlist' element={<Productlist/>}/>
      </Route>
      </Routes>
</BrowserRouter>
   </>
    );
}

export default App;
