export const allProductsDummy = async () => {
  const endPoint = `https://fakestoreapi.com/products`;
  const products = await (await fetch(endPoint)).json();
  return products;
};
