import React, { useEffect, useState } from 'react';
import ContextBebidas from './ContextProdutos';
import { allProductsDummy } from '../services/apiDummysProducts';

const ProviderProdutos = ({ children }) => {
  const [originData, setOrigindata] = useState([]);
  const [produtos, setProdutos] = useState('');

  const fetchapi = async () => {
    const products = await allProductsDummy();
    setProdutos(products);
  };

  useEffect(() => {
    fetchapi();
  }, []);

  const context = {
    produtos,
  };

  return (
    <ContextBebidas.Provider value={ context }>
      { children }
    </ContextBebidas.Provider>
  );
}

export default ProviderProdutos;
