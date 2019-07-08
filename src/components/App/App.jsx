import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import Content from '../Content/Content'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <Content />
      </div>
    </div>
  )
}

export default App
