import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Mainpart from './components/main-part'
import Footer from './components/footer'

function App() {
  return(
    <div className='App-body'>
      <Header />
      <Mainpart />
      <Footer />
    </div>
  )
}

export default App;
