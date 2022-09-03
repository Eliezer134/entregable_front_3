// El componente App es el padre de:
import { useState } from 'react';
// - Cabecera
import Cabecera from "./components/Cabecera"
// - Listado
import Listado from "./components/Listado"
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.





function App() {

    const [compras, setCompras] = useState(0);

    const suma=()=>{
      setCompras(compras+1);
    }

  return (
    <div className="App">
      <Cabecera compras={compras}/>
      <Listado suma={suma}/>
    </div>
  );
}

export default App;
