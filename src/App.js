import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './screens/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Home from './screens/Home';
import About from './screens/About';
import Login from './screens/Login';
// import './App.css';
function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/logout" element={<h1>logout</h1>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        </Route>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
