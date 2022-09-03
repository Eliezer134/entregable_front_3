import React from "react";

import Item from "./Item";

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
import dataJSON from "./data.json";
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
/*/map((elemento) => {
…. aca va la logica
}
return <Ítem nombre={elemento.nombre}/>

/*/

export default function Listado({suma}) {

  return (
    <div className='container'>

  {
      dataJSON.map((prod)=>{
        return <Item{...prod} suma={suma} />
      })}
    
    </div>
  )
}
