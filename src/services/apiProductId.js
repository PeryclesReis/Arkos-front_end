export const produtoPorId = async (id) => {
  const endPoint = `https://fakestoreapi.com/products/${id}`;
  const product = await (await fetch(endPoint)).json();
  return product;
};