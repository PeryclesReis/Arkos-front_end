import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import ContextProdutos from '../provider/ContextProdutos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function Produtos() {
  const { produtos } = useContext(ContextProdutos);

  useEffect(() => {
    console.log(produtos);
  }, []);

  if (produtos.length < 1) return <Loading />;

  return (
    <div className="produtos">
      <FontAwesomeIcon icon={faUtensils} />
      <Header />
      { produtos[0].title }
    </div>
  );
}

export default Produtos;
