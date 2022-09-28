import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar.js';
import Dev from './pages/Dev';
import Work from './pages/Work';
import Dsa from './pages/Dsa';

function App() {
  return (
   <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/dev' element={<Dev />} />
          <Route  path='/work' element={<Work />} />
          <Route  path='/dsa' element={<Dsa />} />
        </Routes>
      </Router>
   </div>
  );
}

export default App;
