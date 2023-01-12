import { useState } from 'react';
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer';

function App() {

  return(
    <div className='App-body'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
