import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homepage from "./Components/Home.jsx"
import Analysis from "./Components/Analysis.jsx"
import Workspace from './Components/Workspace.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Contact from './Components/Contact.jsx'
import './Home.css'
import Tools from './Components/Tools.jsx'
import Stock from './Components/Stock.jsx'
import Guide from './Components/Guide.jsx'
import Knowledge from './Components/Knowledge.jsx'
import Brokers from './Components/Brokers.jsx'

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
    path : "/Workspace",
    element : <Workspace/>,
   },
   {
    path : '/Aboutus',
    element : <AboutUs/>,
   },
   {
    path : "/Contact",
    element : <Contact/>
   },
   {
    path : "/Tools",
    element : <Tools/>
   },
   {
    path : "/Stock",
    element : <Stock/>
   },
   {
    path : "/Guide",
    element : <Guide/>
   },
   {
    path : "/Knowledge",
    element : <Knowledge/>
   },
   {
    path : "/Brokers",
    element : <Brokers/>
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router = {router} />
  </React.StrictMode>,
)
