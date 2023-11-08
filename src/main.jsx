import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Sections/Home/Home.jsx'
import ListaPeliculas from './Sections/ListaPeliculas/ListaPeliculas.jsx';
import { createBrowserRouter,RouterProvider, Route, Link,} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h2 className='text-custom'> Sorry error 404 , no encontre la pagina</h2>,
    children: [
      {
        path: "/",
        element: <h1>hola soy el hijo del home </h1>
      },
      {
        path: "/comedia",
        element: <ListaPeliculas />
      },
      {
        path: "/ciencia-ficcion",
        element: <h1>Hola soy ciencia ficcion </h1>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)


// importaciones de react o librerias (dependencias)
// importaciones de componentes
// importaciones de estilos