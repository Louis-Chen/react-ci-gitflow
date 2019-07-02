import React from 'react'
import './App.css'

import { Counter } from './components/Counter'
import { Button } from './components/Button'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter number={30} />
        <hr />
        <Button />
      </header>
    </div>
  )
}

export default App
