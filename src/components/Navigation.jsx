import React from 'react'
import NavBar from './NavBar'
import { Provider } from 'react-redux'
import store from '../store/store'

const Navigation = () => {
  return (
    <Provider store={store}>
        <NavBar/>
    </Provider>
  )
}

export default Navigation