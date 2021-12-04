export const todosOsProdutos = async () => {
  const endPoint = `https://fakestoreapi.com/products`;
  const produtos = await (await fetch(endPoint)).json();
  return produtos;
};
