import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType{
  isAuthenticated: boolean
  logIn: (token:string)=> void
  logOut: () => void

}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
)

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated ] = useState<boolean>(false)
  
  useEffect( () => {
    const token = localStorage.getItem("token")
    setIsAuthenticated(!!token);
  })

  const logIn = (token: string) => {
    localStorage.setItem("token", token)
    setIsAuthenticated(true)
  }

  const logOut = () => {
    localStorage.removeItem("token")
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if(!context) throw new Error("useAuth must using AuthProvider")
  return context
}
