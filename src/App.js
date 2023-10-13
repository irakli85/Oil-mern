import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Tankers from './pages/Tankers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tankers' element={<Tankers/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
} 

export default App;
