import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="md:grid md:grid-cols-3 text-gray-600 font-body bg-gray-100">
        <Nav />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </div>
    </Router>

  );
}

export default App;
