import React from 'react'
import './app.css'

import Navbar from './Navbar/Navbar.jsx'
import Introduction from './Introduction/Introduction.jsx'
import PrimeraInterfaz from './PrimeraInterfaz/PrimeraInterfaz.jsx'
import SegundaInterfaz from './SegundaInterfaz/SegundaInterfaz.jsx'
import TerceraInterfaz from './TerceraInterfaz/TerceraInterfaz.jsx'
import CuartaInterfaz from './CuartaInterfaz/CuartaInterfaz.jsx'
import QuintaInterfaz from './QuintaInterfaz/QuintaInterfaz.jsx'
import Footer from './Footer/Footer.jsx'

function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Introduction />
      <PrimeraInterfaz />
      <SegundaInterfaz />
      <TerceraInterfaz />
      <CuartaInterfaz />
      <QuintaInterfaz />
      <Footer />
    </div>
  )
}

export default App
