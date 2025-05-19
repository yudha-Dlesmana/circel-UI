import { createContext } from "react";
import { User } from "../types/AuthTypes";
import { useAuthStore } from "../store/AuthStore";

interface AuthContextType{
  user: User
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
)

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const {user} = useAuthStore();

  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
}