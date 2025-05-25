import { RouterProvider } from 'react-router'
import { router } from './routers/routers'
import { AuthProvider } from './contexts/AuthContext'
import { Toaster } from './components/ui/sonner'

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position='top-center' />
    </AuthProvider>
  )
}

export default App