import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import LoginCard from './components/LoginCard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* landing route */}
        <Route path='/' element={
          <div>
            <p>home</p>
          </div>
        } />

        <Route path="/login" element={
          <LoginCard />
        } />

        {/* about page */}
        <Route path='/about' element={
          <div>
            <p>about</p>
          </div>
        } />

        {/* portfolio route */}
        <Route path='/portfolio' element={
          <div>
            <p>portfolio</p>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
