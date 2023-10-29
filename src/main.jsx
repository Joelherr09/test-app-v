import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Cuerpo from './components/Cuerpo.jsx'
import Bottombar from './components/Bottombar.jsx'
import './index.css'
// import "bootstrap/dist/css/bootstrap.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PerfilEquipo from './views/PerfilEquipo.jsx'
import equipos from './data/equipos.js'
import usuarios from './data/usuarios.js'
import partidos from './data/partidos.js'
import campeonatos from './data/campeonatos.js'
import Listas from './views/Listas.jsx'
import PartidoVista from './views/PartidoVista.jsx'
import ListasCampeonatos from './views/ListasCampeonatos.jsx'
import ListaPartidos from './views/ListaPartidos.jsx'
import PerfilCampeonato from './views/PerfilCampeonato.jsx'
import Articulos from './components/Articulos.jsx'
import AddArticulo from './components/AddArticulo.jsx'
import Registro from './components/auth/Registro.jsx'
import Login from './components/auth/Login.jsx'





const routes = [
  {
    path: "/",
    element: [<Cuerpo/>,<Navbar/>],
  },
  {
    path: "/listas/",
    element: [<Navbar/>,<Listas/>],
  }
  ,
  {
    path: "/campeonatos/",
    element: [<Navbar/>, <ListasCampeonatos/>],
  },
  {
    path: "/partidos/",
    element: [<Navbar/>, <ListaPartidos/>],
  },
  {
    path: "/blogs/",
    element: [<Navbar/>,<Articulos/>],
  }
  ,
  {
    path: "/crear-blog/",
    element: [<Navbar/>,<AddArticulo/>],
  }
  ,
  {
    path: "/registro/",
    element: [<Navbar/>,<Registro/>],
  }
  ,
  {
    path: "/login/",
    element: [<Navbar/>,<Login/>],
  }
]


equipos.forEach((equipo) =>{
  routes.push({
    path: "/listas/" + equipo.name,
    element: <PerfilEquipo equipo={equipo}/>,
  })
})

usuarios.forEach((usuario) =>{
  routes.push({
    path: usuario.username,
    element: <div>{usuario.username}</div>,
  })
})

partidos.forEach((partido) => {
  routes.push({
    path:"/partidos/" + partido.id,
    element: <PartidoVista partido={partido}/>,
  })
})

campeonatos.forEach((campeonato) => {
  routes.push({
    path: "/campeonatos/" + campeonato.id,
    element: <PerfilCampeonato campeonato={campeonato}/>,
  })
})


const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
