import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Compontents/HomePage'
import Login from '../Compontents/Login'
import Register from '../Compontents/Register'
import PrivateRoute from './PrivateRoute'

const RoutePage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element ={
                <PrivateRoute>
                    <HomePage/>
                </PrivateRoute>
            } />

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default RoutePage