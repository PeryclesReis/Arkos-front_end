import React, { useEffect, useState } from 'react';
import { produtoPorId } from '../services/apiProdutosId';
import Header from '../components/Header';
import Rating from '../components/Rating';
import Loading from '../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function DetalhesComp({ params }) {
  const [produto, setProduto] = useState('');

  const fetch = async () => {
    console.log(params);
    const res = await produtoPorId(params.id);
    setProduto(res);
  }

  useEffect(() => {
    fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (produto) => {
    const item = [{ produto }];
    let listaItens = JSON.parse(localStorage.getItem('itens') || '[]');
    listaItens.push(...item);
    localStorage.setItem('itens', JSON.stringify(listaItens));
  };

  const btn = (produto) => {
    return (
      <button
        id={ produto.id }
        type="button"
        className="botao"
        onClick={ () => handleClick(produto) }
      >
        <FontAwesomeIcon className="icon-cart-botao" icon={ faShoppingCart } />
        {`R$ ${ produto.price.toFixed(2) }`}
      </button>
    );
  }

  const card = () => {
    const { id, image, title, description, category, rating } = produto;

    return (
      <div className="main-principal" key={ id }>
        <div className="content">
          <img className="image-detalhes" src={ image } alt="produtos" />
          <div className="content-card">
            <div className="rating-detalhes">
              <Rating rate={ rating.rate } />
              <p> ({ rating.count }) </p>
            </div>
            <div className="descricao">
              <h3>{ title }</h3>
              <h5>{ category }</h5>
              <p>{ description }</p>
            </div>
            <div className="preco">
              { btn(produto) }
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header props='true' />
      {
        !produto ?
        <Loading /> :
        card()
      }
    </>
  );
}

export default DetalhesComp;
