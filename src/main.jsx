import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//import App from './App'
import Homepage from "./Components/Home.jsx"
import Analysis from "./Components/Analysis.jsx"
import Guide from "./Components/Guide.jsx"
import AboutUs from './Components/AboutUs.jsx'
import Contact from './Components/Contact.jsx'
import './Home.css'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Homepage/>,
  },
  {
    path : "/Analysis",
    element : <Analysis/>,
   },
   {
    path : "/Guide",
    element : <Guide/>,
   },
   {
    path : '/Aboutus',
    element : <AboutUs/>,
   },
   {
    path : "/Contact",
    element : <Contact/>
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router = {router} />
  </React.StrictMode>,
)
