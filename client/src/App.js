import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import LoginCard from './components/LoginCard';
import About from './components/About';
import Footer from './components/Footer';
import Calculator from './components/Calculator';

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
          <About />
        } />

        {/* portfolio route */}
        <Route path='/portfolio' element={
          <div>
            <p>portfolio</p>
          </div>
        } />
        <Route path='/calculator' element={
          <Calculator />
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
