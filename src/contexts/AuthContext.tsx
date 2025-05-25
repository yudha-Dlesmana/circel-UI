import { createContext, useContext, useState } from "react";

interface AuthContextType{
  token: string | null
  logIn: (token:string | null)=> void
  logOut: () => void
  
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
)

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [token, setToken ] = useState<string | null>(null)
  
  const logIn = (token: string | null) => {
    setToken(token)
  }

  const logOut = () => {
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{token, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if(!context) throw new Error("useAuth must using AuthProvider")
  return context
}
