// Crie um estado chamado darkMode e defina false como valor inicial;
// Use darkMode para alterar dinamicamente o background e a cor do texto da página;
// Adicione um botão que, ao ser clicado, inverte o valor do estado(true ↔ false);
// Importante: Utilize inline styles para estilizar a página.
// Importe o componente dentro do App.

import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  console.log(darkMode)

  return (
    <>
      <div style={{
        backgroundColor: darkMode ? '#333' : '#fff',
        color: darkMode ? '#fff' : '#333',
        padding: 20
      }}
      >
        <p>Tema: {darkMode ? 'Escuro' : 'Claro'}</p>
        <button onClick={() => setDarkMode(!darkMode)}>
          Tema {darkMode ? '🌚' : '🌝'}
        </button>
      </div>
    </>
  );
}

export default App;
