import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Ejer1 from './components/Ejer1';




function App() {
  
  const [msjExtra,setMensaje] =useState('')
  function msj(){
    return (setMensaje('(from changed state)!'))
  }
  return (
    <>
     <Ejer1 tituloExtra='My friend' msj={msjExtra}/>
      <button className='btn btn-primary' onClick={msj}>Click</button>
    </>
  )
}

export default App
