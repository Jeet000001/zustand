import React from 'react'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Users from './components/Users'

const App = () => {
  return (
    <div>
      <Navbar />
      <Counter />
      <Users />
    </div>
  )
}

export default App