import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import Cookies from "cookies-js"

type AuthContextType = {
  token: string | null
  setToken: (token: string | null) => void
  loading : boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({children}: {children: ReactNode}){
  const [token, setToken] = useState<string | null>(Cookies.get("access-token") || null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initToken = Cookies.get("access-token") || null
    setToken(initToken)
    setLoading(false)
    console.log(token)


    const interval = setInterval(() => {
      const newToken = Cookies.get("access-token") || null
      setToken((prev) => (prev !== newToken ? newToken : prev))
    }, 10000)

    return () => clearInterval(interval)
  }, [])
  return (
    <AuthContext.Provider value={{token, loading, setToken}}>
      {children}
    </AuthContext.Provider>
  )
}
export function useAuth(){
  const context = useContext(AuthContext)
  if (!context) throw new Error ("useAuth must be used within AuthProvider")
  return context
}