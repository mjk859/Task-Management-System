import React from 'react';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import RegisterPage from '../pages/RegisterPage';
import Login from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';

const App = () => {
  return (
    <div>
        
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Routes>
          
        </Router>
        <Footer />
    </div>
  );
};

export default App;
