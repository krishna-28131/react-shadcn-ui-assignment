import { createContext, useContext, useEffect, useState } from "react"
import { authService } from "@/services/auth.service"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authService.onAuthChange(setUser, setLoading)
  }, [])

  return (
    <AuthContext.Provider value={{ user, ...authService }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
