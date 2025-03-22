// Instale o react - router - dom, caso ainda não tenha instalado;
// Crie um componente NotFound que renderiza a mensagem "Página não encontrada!";
// Crie um menu de navegação e adicione um link para uma página inexistente para testar o erro;
// Importe o componente dentro do app;
import { BrowserRouter, Link, Route, Routes } from "react-router";

function Home() {
  return <h1>Pagina Inicial</h1>
}

function NotFound() {
  return <h1>Pagina não encontrada! 😭</h1>
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: 20 }}>
        <Link to="/home">Você está na home</Link>
        <Link to="/pagina-inexistente">pagina-inexistente</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
