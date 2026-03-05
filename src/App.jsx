import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  )
}

export default App
