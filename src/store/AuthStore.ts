import { create } from "zustand";
import { User } from "../types/AuthTypes";
import { persist } from "zustand/middleware";

interface AuthStoreType {
  user: User
  setUser: (user: User) => void
  logIn: () => void
  logOut: () => void
  resetPassword: (newPass: string) => void
}

export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      user: {} as User,
      setUser: (user) => set(() => ({user})),
      logIn: () => set((state) => ({user: {...state.user, login:true}})),
      logOut: () => set((state) => ({user: {...state.user, login: false}})),
      resetPassword: (newPass) => set((state) => ({user: {...state.user, password:newPass}}))
    }),
    { name: 'user-storege'}
  )
)
