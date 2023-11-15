import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Sections/Home/Home.jsx'
import ListaPeliculas from './Sections/ListaPeliculas/ListaPeliculas.jsx';
import HomeSon from './Sections/Home/HomeSon.jsx';
import { createBrowserRouter,RouterProvider, Route, Link,} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import MovieDetail from './Sections/PeliculaDetalle/MovieDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h2 className='text-custom'> Sorry error 404 , no encontre la pagina</h2>,
    children: [
      {
        path: "/",
        element: <HomeSon />
      },
      {
        path: "/comedia",
        element: <ListaPeliculas genero='comedia' key="comedia" />
      },
      {
        path: "/independientes",
        element: <ListaPeliculas genero='independientes' key="independientes" />
      },
      {
        path: "/clasicas",
        element: <ListaPeliculas genero='clasicas' key="clasicas" />
      },
      {
        path: "/ciencia-ficcion",
        element: <h1>Hola soy ciencia ficcion </h1>
      },
      {
        path: "/:genero/:titulo",
        element: <MovieDetail />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} /> 
)


// importaciones de react o librerias (dependencias)
// importaciones de componentes
// importaciones de estilos