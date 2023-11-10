import React from 'react'
import { useLocation } from 'react-router-dom'
import './MovieDetail.css'

export default function MovieDetail(props) {

    const location = useLocation()
    const movie = location.state
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
                <img src={movie.portada} className='detail-moview-img' alt="" />
            </div>

            <div className="col">
                <h2>{movie.titulo} </h2>
                
    
                <ul className='text-custom'>
                {movie.actores.map((actor, index) => {
                    return <li>{actor}</li>
                })}
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
