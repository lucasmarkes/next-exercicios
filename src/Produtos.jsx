// () -> Retorno implícito
// {} -> Retorno explicido


const produtos = [
  { id: 1, nome: 'Macbook', preco: 6000 },
  { id: 2, nome: 'iPhone', preco: 3000 },
  { id: 3, nome: 'AirPods', preco: 1000 }
]

function Produtos() {
  return (
    <ul>
      {
        produtos.map((produto) => {
          return <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
          </li>
        })
      }
    </ul>
  );
}

export default Produtos;
