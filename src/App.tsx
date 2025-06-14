import { RouterProvider } from 'react-router'
import { router } from './routers/routers'
import { Toaster } from './components/ui/sonner'

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position='top-center' />
    </>
    
  )
}

export default App