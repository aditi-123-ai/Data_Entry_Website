import './App.css';
import Login from './components/Login';
import Registeration from './components/Registeration';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={<Registeration/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        
      </Routes>
      
      {/* <Home/> */}
    </div>
  );
}

export default App;
