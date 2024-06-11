import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Nutreints from './components/Nutreints';
import Body from './components/Body';
import Contact from './components/Contact';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  return (
    <div className='hello'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<PrivateComponent />}>
          <Route path='/nutrients' element={<Nutreints />} />
          <Route path='/body' element={<Body />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
