import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'
import Map from './components/Map'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ContactForm />
      <Map />
      <Footer />
    </>
  )
}

export default App
