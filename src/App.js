import React from 'react'
import { Route } from 'wouter'
import './index.scss'

import Home from './pages/Home'
import Users from './pages/Users'

function App() {
  return (
    <>
      <Route
        component={Home}
        path='/'
      />
      <Route
        component={Users}
        path='/users'
      />
    </>
  )
}

export default App
