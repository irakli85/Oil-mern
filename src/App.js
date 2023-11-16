import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

//pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Filtred from './pages/Filtred';
import Login from './pages/Login';
import Signup from './pages/Signup';
import React from 'react';


function App() {

  const {user} = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path='/' element={ user ? <Filtred/> : <Navigate to='/login'/> } />
          <Route path='/login' element={ !user ? <Login/> : <Navigate to='/'/> } />
          <Route path='/signup' element={ !user ? <Signup/> : <Navigate to='/'/>} />
          <Route path='/add' element={<Home/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
} 

export default App;
