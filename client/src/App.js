import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import LoginCard from './components/LoginCard';
import About from './components/About';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import Home from './components/Home';
import PieGraph from './components/PieGraph'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* landing route */}
        <Route path='/' element={
          <Home />
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
          <PieGraph />
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
