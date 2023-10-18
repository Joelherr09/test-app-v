import './css/Cuerpo.css'
import CuadroPartido from './CuadroPartido'
import partidos from '../data/partidos'
import CuadroPartidoTerminado from './CuadroPartidoTerminado';



function Cuerpo() {

  const ListaPartidos = partidos.filter((p) => p.estado === "proximo");
  const ListaPartidosSiguientes = ListaPartidos.slice(0, 8).map((p) => {
    return <CuadroPartido title={p.equipo_1} description={p.equipo_2} id={p.id} hora={p.hora} fecha={p.fecha} campeonato={p.campeonato} resultado={p.resultado}/>;
  });

  const ListaPartidosDos = partidos.filter((p) => p.estado === "terminado");
  const ListaPartidosTerminados = ListaPartidosDos.slice(0, 8).map((p) => {
    return <CuadroPartidoTerminado title={p.equipo_1} description={p.equipo_2} id={p.id} hora={p.hora} fecha={p.fecha} campeonato={p.campeonato} resultado={p.resultado}/>  ;
  });

  

  return (
    <>
      <div class="PrimerCuadro">
        <h3>Partidos Siguientes</h3>
        <div class="PartidosSiguientes">
          {ListaPartidosSiguientes}
        </div>
      </div>

      <div class="SegundoCuadro">
        <h3>Partidos Terminados</h3>
        <div class="PartidosSiguientes">
          {ListaPartidosTerminados}
        </div>
      </div>


      <div class="Hero">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/oIm9pPpjgjY" title="XVI Copa Panamericana NORCECA de Voleibol Varonil. CUARTOS DE FINAL ▶️ En vivo | COLOMBIA VS CHILE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>



    
    </>
  )
}


export default Cuerpo