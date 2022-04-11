import './App.css';
import { Routes } from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Home from './components/Home';
import Details from './components/Details'
import ActivityCreate from './components/ActivityCreate';

function App() {
  
  return (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element= {<LandingPage />}/>
        <Route path='/home' element= {<Home />}/>
        <Route path='/countries/:id' element= {<Details />}/>
        <Route path='/activities' element={<ActivityCreate/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
