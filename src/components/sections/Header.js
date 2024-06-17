//import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

// Componente Header

//Se usa Link en en vez de <a>, para evitar la recarga completa de una pagina.
/* <li><Link to="/">Inicio</Link></li>
            <li><Link to="/cupcakes">Cupcakes</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li> */

//Si queremos resaltar un elemento(activo) en un Nav, conviene usar NavLink.

const Header = () => (
    <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center"><NavLink to="/">
        <img className="main-logo" src="https://ux.ed.team/img/edteam-ux.svg" alt="Logo edcupcake" /></NavLink>
      </div>
      <div class="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
        <nav className="main-menu" id="main-menu">
          <ul>
            <li><NavLink to="/" exact>Inicio</NavLink></li>
            <li><NavLink to="/cupcakes" exact>Cupcakes</NavLink></li>
            <li><NavLink to="/nosotros" exact>Nosotros</NavLink></li>
          </ul>
        </nav>
        <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
      </div>
    </div>
  </header>
)

//Para que este componente pueda ser usado en otra parte del proyecto se debe exportarlo
export default Header