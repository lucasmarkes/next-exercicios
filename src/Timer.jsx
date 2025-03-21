// Crie um estado seconds para armazenar o tempo, iniciando em 0;
// Use useEffect para iniciar um setInterval que incrementa seconds a cada segundo;
// Retorne uma função dentro do useEffect para limpar o intervalo quando o componente for desmontado;
// Renderize o tempo na tela dentro de um < h1 >;

import { useEffect, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => { setSeconds(prev => prev + 1) }, 1000);
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <h1>Tempo: {seconds} segundos</h1>
    </>
  );
}

export default App;
