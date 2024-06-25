import React from 'react'
import './App.css'
import TablaProductos from './TablaProductos'
import PRODUCTOS from './Productos'

function App() {
  return (
    <div className="App">
      <h1>Tabla de Productos</h1>
      <TablaProductos productos={PRODUCTOS} />
    </div>
  )
}

export default App
