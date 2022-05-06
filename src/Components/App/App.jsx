import React from 'react'
import './app.css'

import Navbar from './Navbar/Navbar.jsx'
import Introduction from './Introduction/Introduction.jsx'
import PrimeraInterfaz from './PrimeraInterfaz/PrimeraInterfaz.jsx'
import SegundaInterfaz from './SegundaInterfaz/SegundaInterfaz.jsx'
import TerceraInterfaz from './TerceraInterfaz/TerceraInterfaz.jsx'
import CuartaInterfaz from './CuartaInterfaz/CuartaInterfaz.jsx'

function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Introduction />
      <PrimeraInterfaz />
      <SegundaInterfaz />
      <TerceraInterfaz />
      <CuartaInterfaz />
    </div>
  )
}

export default App
