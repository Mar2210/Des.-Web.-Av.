import { useState } from 'react'
import './App.css'
import Cambio from './Cambio'
import Tipo from './Tipo'
import Aportes from './Aportes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cambio titulo="Las nubes" contenido="Las nubes son masas de agua en forma de vapor que se encuentran en la atmósfera de la Tierra." />
        <Tipo Tip="Tipos" Des=""/>
        <Aportes Uso="Aportaciones al mundo" DesII=""/>

      </div>
    </>
  )
}

export default App
