import React, { createContext, useState } from 'react'

interface AuthContextProps {
  isLoggedIn: boolean
  user: any
}

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  user: {}
})

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  return (
        <AuthContext.Provider
            value={{ isLoggedIn, user }}
        >
            {children}
        </AuthContext.Provider>
  )
}
