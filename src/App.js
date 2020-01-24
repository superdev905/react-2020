import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

import DevForm from './componentes/DevForm';
import DevItem from './componentes/DevItems';

function App() {
  const [ devs, setDevs ] = useState([]);

  useEffect( () => {    
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) { // dispara no submit do formulario    
    const response = await api.post('/devs', data);
    console.log(response.data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map( (dev) => { return (
              <DevItem key={dev.id} dev={dev} />
            )}
          )}


        </ul>
      </main>
    </div>
  )
}

export default App;

/* 
  3 Conceito principais = {
  Componente: Bloco isolado de HTML, Css, JavaScript, o qual não interfere o restante da aplicação 
  Propriedade: Informações que um componente PAI passa para o componente FILHO
  Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
  }
*/



/* counter++
function App() {
  const [counter, setCounter] = useState(0);
  
  function IncrementCounter() {
    setCounter(counter + 1);  
  }
  return (
    <>
<h1>Contador: {counter}</h1>
      <button onClick={IncrementCounter}>Incrementar</button>
    </>
  );
}
*/