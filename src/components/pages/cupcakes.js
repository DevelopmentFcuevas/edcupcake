//Este componente es una "Pagina" llamada cupcakes.
//Aca voy a imprimir todos mis cupcakes que vienen del API

import { useEffect, useState } from "react"
import { get } from "axios"
import Cupcake from "../cards/Cupcake"
import useFetch from "../../hooks/useFetch"

const Cupcakes = ({peticion, title}) => {

    // const [cupcakes, setCupcakes] = useState()

    /*
    //useEffect: Hey! la primera vez que cargues la pagina cupcake, conectate al API y traeme todos los cupcakes
    //como me conecto al API? voy a utilizar la funcion "fetch" de javascript.
    useEffect(() => {
        //fetch("http://localhost:3001/cupcakes")
        fetch(`${process.env.REACT_APP_URL_API}${peticion}`)
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => setCupcakes(data))
            .catch(e => console.log(e))
    }, [peticion])
    */

    /*
    //useEffect: Hey! la primera vez que cargues la pagina cupcake, conectate al API y traeme todos los cupcakes
    //como me conecto al API? voy a utilizar la funcion "fetch" de javascript.
    useEffect(() => {
        get(`${process.env.REACT_APP_URL_API}${peticion}`)
            .then(({ data }) => setCupcakes(data))
    }, [peticion])
    */

    // const data = useFetch(peticion)
    //const cupcakes = useFetch(peticion)
    const [cupcakes] = useFetch(peticion)

    return (
        <div className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
            
            { title && <h1>Pagina de cupcakes</h1> }
            {
                cupcakes ? (
                    <section>
                        {
                            cupcakes.map(({
                                id,
                                descripcion,
                                imagen,
                                sabor,
                                color,
                                precio
                            }) => (
                                <Cupcake
                                key={id}
                                imagen={imagen}
                                descripcion={descripcion}
                                sabor={sabor}
                                color={color}
                                precio={precio}/>
                            ))
                        }
                    </section>
                ) : (<span>Cargando...</span>)
            }
        </div>
    )
    
}

export default Cupcakes