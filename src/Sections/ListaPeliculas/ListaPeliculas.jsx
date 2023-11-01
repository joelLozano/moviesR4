import React from 'react'
import CardComponent from '../../Componets/Cards/Card'

export default function ListaPeliculas() {


    let pelis = [
        {
            title: 'Hombre araña y rasguña',
            description: 'pelicula comica y de super herores',
            portada: 'https://images5.alphacoders.com/132/thumbbig-1328421.webp'
        },
        {
            title: 'El aro',
            description: 'pelicula de terror',
            portada: 'https://images5.alphacoders.com/132/thumbbig-1328421.webp'
        }, 
        {
            title: 'Otra peli',
            description: 'pelicula de terror',
            portada: 'https://images5.alphacoders.com/132/thumbbig-1328421.webp'
        },
        {
            title: 'Titanic',
            description: 'pelicula de amor',
            portada: 'https://images5.alphacoders.com/132/thumbbig-1328421.webp'
        },
        {
            title: 'Titanic 2',
            description: 'pelicula de amor 2',
            portada: 'https://images5.alphacoders.com/132/thumbbig-1328421.webp'
        }
    ]

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col d-flex justify-content-center">
                <input type="text" placeholder='search' />
            </div>
        </div>

        <div className="row mt-5">
            { pelis.map((item, index) => {
                return (
                    <div className="col-3 mt-5 mr-2" key={index}>
                        <CardComponent portada={item.portada} title={item.title} description={item.description} />
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

