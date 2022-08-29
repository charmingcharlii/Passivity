import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        {/* landing route */}
        <Route path='/' element={
          <div>
            <p>home</p>
          </div>
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
