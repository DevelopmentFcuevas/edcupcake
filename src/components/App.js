import "../styles/styles.scss"
import Header from "./sections/Header"
import Home from "./pages/home"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Cupcakes from "./pages/cupcakes"
import AboutUs from "./pages/aboutUs";

/*
const App = () => (
  <>
    <Header></Header>
    <Home></Home>
  </>
)
*/

/* Switch verifica una ruta y llama a un componente asociado a esa ruta. En este caso,
los componentes que tengo aqui son: Header, Cupcakes, AboutUs, Home*/
const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/cupcakes"><Cupcakes title peticion="cupcakes" /></Route>
      <Route path="/nosotros"><AboutUs /></Route>
      <Route path="/"><Home /></Route>
    </Switch>
  </Router>
)

// Un componente(App) no puede devolver mas de un elemento, los 
//tenemos que agrupar en un fragmento(<></>)
export default App