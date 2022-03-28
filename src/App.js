import React from 'react';
import "./App.css";
import {Navbar} from './Components/Navbar';
import {Routes,Route} from "react-router-dom";
import {Home} from './Components/Home';



import { Login } from './Components/Login';
import {ShowToken} from './Components/ShowToken';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Routes>
        
        <Route path='/Home' element={< Home />}/>
        <Route path='/Login'  element={<Login/>}/>
        <Route path='/ShowToken'  element={<ShowToken/>}/>
        </Routes>
    </div>
        
       

       
  )
}

export default App