import React from 'react'
import './app.css'

import Navbar from './Navbar/Navbar.jsx'
import Introduction from './Introduction/Introduction.jsx'
import PrimeraInterfaz from './PrimeraInterfaz/PrimeraInterfaz.jsx'

function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Introduction />
      <PrimeraInterfaz />
    </div>
  )
}

export default App
