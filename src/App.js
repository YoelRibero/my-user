import React from 'react'
import { Route } from 'wouter'
import './index.scss'

import Home from './pages/Home'
import Users from './pages/Users'
import UsersNew from './pages/UsersNew'
import UserDetail from './pages/UserDetail'
import UserEdit from './pages/UserEdit'

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
      <Route
        component={UsersNew}
        path='/users/new'
      />
      <Route
        component={UserDetail}
        path='/user/:userId'
      />
      <Route
        component={UserEdit}
        path='/user/:userId/edit'
      />
    </>
  )
}

export default App
