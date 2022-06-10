import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './screens/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Products from './screens/Products';
import AddProducts from './screens/AddProducts';
import Login from './screens/Login';
import UpdateProducts from './screens/UpdateProducts';
// import './App.css';
function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<Products/>} />
        <Route path="/logout" element={<h1>logout</h1>} />
        <Route path="/add-products" element={<AddProducts/>} />
        <Route path="/update-products" element={<UpdateProducts/>} />
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
