// Crie um input onde o usuário pode digitar um nome de usuário do GitHub; OK
// Adicione um botão que, ao ser clicado, faz uma requisição à API do GitHub usando fetch;
// Exiba apenas o nome do usuário na tela;
// Importe o componente dentro do App;

import { useState } from "react";

function App() {
  const [user, setUser] = useState()
  const [name, setName] = useState()

  const fetchUser = async () => {
    // Template String - Template Literals
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json()
    setName(data.name)
  }

  return (
    <>
      <input type="text" onChange={(event) => setUser(event.target.value)} />
      <button onClick={fetchUser}>Buscar</button>
      <p>Usuário: {name}</p>
    </>
  );
}

export default App;
