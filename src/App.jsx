import Main from './Components/Main'
import LogIn from './Components/Log IN/LogIn'
import Signup from './Components/Sign UP/Signup'
import './App.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';


const router=createBrowserRouter([
  {
    path: '/home',
    element: <Main/>
  },
  {
    path:'/login',
    element:<LogIn/>
  },
  {
    path:'/',
    element:<Signup/>
  }
])

function App() {


  return (
    <>
     <RouterProvider router={router}></RouterProvider> 
    </>
  )
}

export default App
