import React, { useEffect, useState } from 'react';
import ContextBebidas from './ContextProdutos';
import { todosOsProdutos } from '../services/apiDummysProducts';

const ProviderProdutos = ({ children }) => {
  const [produtos, setProdutos] = useState('');

  const todosProdutos = async () => {
    const products = await todosOsProdutos();
    setProdutos(products);
  };

  useEffect(() => {
    todosProdutos();
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
