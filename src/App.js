import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Create from './components/AddRekomen/Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/berita';
import Services from './pages/peta';
import Contact from './pages/jadwal';
import SignUp from './pages/rekomendasi';
import SignIn from './pages/signin';
import EditRekom from './pages/editrekom';
import Edit from './pages/Edit';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/berita' element={<About/>} />
        <Route path='/peta' element={<Services/>} />
        <Route path='/jadwal' element={<Contact/>} />
        <Route path='/rekomendasi' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/editrekom' element={<EditRekom/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/editrekom/edit/:id' element={<Edit/>} />
      </Routes>
    </Router>
  );
}

export default App;
