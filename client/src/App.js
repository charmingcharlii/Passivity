import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
<<<<<<< HEAD
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

=======
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> d33c4868ff37815933579b4c80152762c2b9649e
  );
}

export default App;
