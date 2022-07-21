import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Counter from './componentes/Counter';
import { useState } from 'react';

function App() {
  const [clics, setClic] = useState(0);

  const handleClic = () => { setClic(clics + 1); }
  const resetTo = (num) => { setClic(num); }
  
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} 
             alt='Logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Counter clics={clics} />
        
        <Boton texto='Sumar un clic' esBotonDeClic={true} manejarClic={handleClic}/>
        <Boton texto='Volver a cero' esBotonDeClic={false} manejarClic={() => resetTo(0) }/>
      </div>
    </div>
  );
}

export default App;
