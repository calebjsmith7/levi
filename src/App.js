import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Production from './components/Production';
import Creative from './components/Creative';

function App() {
  return (
    <Router>
      <div className='App'>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/production' element={<Production />} />
          <Route path='/creative' element={<Creative />} />
        </Routes>

      </div>
    </Router>


  );
}

export default App;
