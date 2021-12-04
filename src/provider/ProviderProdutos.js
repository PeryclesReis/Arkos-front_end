import React, { useEffect, useState } from 'react';
import ContextBebidas from './ContextProdutos';
import { apiProdutos } from '../services/apiBackEnd';

const ProviderProdutos = ({ children }) => {
  const [produtos, setProdutos] = useState('');

  const todosProdutos = async () => {
    const { data } = await apiProdutos();
    setProdutos(data);
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
