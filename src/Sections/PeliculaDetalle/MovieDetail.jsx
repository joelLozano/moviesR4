import React from 'react'
import { useLocation } from 'react-router-dom'

export default function MovieDetail(props) {

    const location = useLocation()
    const movie = location.state
    console.log(location)
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className='h1-custom'>{movie.titulo}</h1>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <img src="" alt="" />
            </div>

            <div className="col">
                <h2>Titulo de la pelicula</h2>
                <ul>
                    <li>Actores 1</li>
                    <li>Actores 2</li>
                </ul>
                <p>duracion </p>
                <p>fecha de estreno </p>
                <p>calificacion </p>
            </div>
        </div>

        <div className="row">
            <p>Sinopsis </p>
        </div>
    </div>
    </>
  )
}
