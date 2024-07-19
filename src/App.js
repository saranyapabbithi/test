import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Counter from './Components/Counter';
import Counter1 from './Components/Counter1';

function App() {
  return (
    <div className="App">
      <Row>
        <Router>
          <Col sm={2} className='Col1'><Header/></Col>
          <Col sm={10} className='Col2'>
          <Routes>
          <Route path='/test'exact Component={Home}/>
          <Route path='/about'exact Component={About}/>
          <Route path='/services'exact Component={Services}/>
          <Route path='/contact'exact Component={Contact}/>
          <Route path='/counter'exact Component={Counter}/>
          <Route path='/counter1'exact Component={Counter1}/>
          </Routes>
          </Col>
        </Router>
      </Row>
    </div>
  );
}

export default App;
