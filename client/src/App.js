import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloProvider,
  createHttpLink,
  ApolloClient,
  InMemoryCache
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import './dist/output.css'



import Header from './components/Header';
import LoginCard from './components/LoginCard';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home2';
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  let token = localStorage.getItem('id_token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
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
              <Portfolio />
          } />
          {/* <Route path='/calculator' element={
          <Calculator />
        } /> */}
        {/* profile route */}
        <Route path='/profile' element={
          <Profile />
        } />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
