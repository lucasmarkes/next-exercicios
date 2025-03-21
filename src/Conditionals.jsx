function Conditionals({ cargo }) {
  let usuario = ''
  if (cargo === 'admin') {
    usuario = 'Todas as permissões concedidas.'
  } else if (cargo === 'usuário') {
    usuario = 'Permissões parcialmente concedidas.'
  }
  return (
    <>
      <h1>O usuário tem: {usuario}</h1>
    </>
  );
}

export default Conditionals;


// RBAC - role based access control