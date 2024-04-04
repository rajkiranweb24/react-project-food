import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Body from './components/Body.jsx'
import Contact from './components/Contact.jsx'
import { Outlet } from 'react-router-dom'
function Main() {
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const routerElement=createBrowserRouter([
  {
   path:"/",
   element:  <Main/>,
   errorElement:<Error/>,
   children:[
    {
      path:"/",
      element :<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
   ]
  }


])

 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={routerElement} />

  </React.StrictMode>,
)

