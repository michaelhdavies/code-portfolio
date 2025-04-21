import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './Styles.css';
import App  from './App.jsx'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Error  from './pages/Error.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: '/about',
        element: <AboutMe />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resume',
        element: <Resume />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
    </RouterProvider>
);