import { useState, useEffect} from 'react'
import CardComponent from '../../Componets/Cards/Card'
import { FaSpinner } from "react-icons/fa6";
import './ListaPeliculas.css'

export default function ListaPeliculas() {

    const [search, setSearch] = useState('')
    const [peliculas, setPeliculas] = useState([])
    const [peliculasFilter, setPeliculasFilter] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if (loading) {
        fetch("https://api-pelis-back.onrender.com/comedia")
          .then((response) => response.json())
          .then((data) => {
            setPeliculas(data.peliculas);
            setPeliculasFilter(data.peliculas);
            setLoading(false)
          });
      }
    }, []);

    const handleSearch = (e) => {
        console.log(e.target.value)
        if (e.target.value == '') {
            setPeliculasFilter(peliculas)
        } else {
            //console.log(e.target.value)
        setSearch(e.target.value) // actualiza el estado de search - guarda lo que escribi 
        let pelisFilter = peliculas.filter((peli) => peli.titulo.toLowerCase().includes(search.toLowerCase()))
        setPeliculasFilter(pelisFilter)
        }
    }

    if (loading) {
        return (
            <div className="container loader-container">
                <div className="row">
                    <div className="col ">
                    <FaSpinner className='spinner'/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <input type="text" placeholder='search' onChange={handleSearch}/>
                    </div>
                </div>
        
                <div className="row mt-5">
                    { peliculasFilter.map((item, index) => {
                        return (
                            <div className="col-3 mt-5 mr-2" key={index}>
                                <CardComponent portada={item.portada} title={item.titulo} description={item.sinopsis} />
                            </div>
                        )
                    })}
                </div>
            </div>
            </>
          )
    }

  
}

