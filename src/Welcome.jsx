import ReactLogo from "./ReactLogo";

function Welcome({ name = "Visitante" }) {
  const h1Style = { color: "#c71e1e", fontSize: 64 };

  return (
    <>
      <ReactLogo />
      <h1 style={h1Style}>Bem-vindo, {name}</h1>
    </>
  );
}

export default Welcome;
