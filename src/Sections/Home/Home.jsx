import Portada from "../Portada/Portada.jsx"
import ListaPeliculas from "../ListaPeliculas/ListaPeliculas.jsx"
import { Outlet } from "react-router-dom"

export default function Home() {
    return(
    <>
        {/* Menu */}
        {/* portada - carrucel */}
        <Portada />
        {/* <ListaPeliculas /> */}
        <Outlet />
        {/* footer */}
    </>
    )
}


// portada -> carrucel / cards / galeria
