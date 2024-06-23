import React from 'react'
import { useAuth } from './auth'
import { Navigate, useNavigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
    const auth = useAuth()
    const navigate = useNavigate()

    if (!auth.user){
        return <Navigate to='/login' />
    }
    
  return children
}

export default RequireAuth
