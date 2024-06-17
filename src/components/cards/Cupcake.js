//import PropTypes from "prop-types"
import {number, string} from "prop-types" //a esto se le llama destructuracion.


//Dentro de "cards" tengo el componente Cupcake.
//¿Que va hacer el componente Cupcake?
//va a renderizar en cada card los cupcakes.

const Cupcake = ({ descripcion, imagen, sabor, color, precio }) => {
    return (
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <img src={ imagen } alt={ sabor } />
            <p>{descripcion}</p>
            <span>Color: {color}</span>
            <span>Precio: {precio}</span>
        </div>
    )
}

// Cupcake.propTypes = {
//     precio: PropTypes.number,
//     color: PropTypes.string,
//     descripcion: PropTypes.string,
//     sabor: PropTypes.string,
//     imagen: PropTypes.string
// }

Cupcake.propTypes = {
    precio: number,
    color: string.isRequired,
    descripcion: string.isRequired,
    sabor: string.isRequired,
    imagen: string
}

Cupcake.defaultProps = {
    precio: 0 //el precio no va a ser requerido, porque sino viene yo le estoy dando un valor por defecto.
}

//exportamos este componente para poder utilizarlo en otro lugar.
export default Cupcake