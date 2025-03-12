import { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Body from './Components/body/body';
import Login from './Components/login/login';
import Profile from './Components/Profile/Profile';

function App() {
  

  return (
    <>    
    <BrowserRouter basename='/'>
      <Routes >
              <Route path='/' element={<Body></Body>}>
                  <Route path='/login' element={<Login></Login>}></Route>
                  <Route path='Profile' element={<Profile></Profile>}></Route>
              </Route>
             
             
      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
