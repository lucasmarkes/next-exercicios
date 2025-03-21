import { useState } from 'react'

// Crie um input onde o usuário digita sua idade;
// O sistema diz se ele pode acessar o conteúdo ou não;
// Importe o componente dentro do App;

function App() {
  const [age, setAge] = useState("");

  return (
    <div>
      <input type="number" placeholder='Digite sua idade' value={age} onChange={(event) => setAge(event.target.value)} />
      {age && (
        <p>{age >= 18 ? 'Acesso permitido' : 'Barrado boy'}</p>
      )}
    </div>
  );
}

export default App;
