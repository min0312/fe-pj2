import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Page1 from './Page/Page1';
import Page2 from './Page/Page2';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Page1} /> 
        <Route path='/page2' Component={Page2} />
      </Routes>
    </Router>
  );
}

export default App;
