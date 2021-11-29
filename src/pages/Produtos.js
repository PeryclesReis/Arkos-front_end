import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import ContextProdutos from '../provider/ContextProdutos';
import Rating from '../components/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/produto.css';

function Produtos(props) {
  const { produtos } = useContext(ContextProdutos);

  useEffect(() => {
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
        className="btn btn-primary mt-auto"
        onClick={ () => handleClick(produto) }
      >
        <FontAwesomeIcon className="icon-cart-btn" icon={ faShoppingCart } />
        {`R$ ${ produto.price.toFixed(2) }`}
      </button>
    );
  }

  const listaProdutos = () => {
    return produtos.map((produto) => (
      <div className="produto" key={ produto.id }>
        <img className="image" src={ produto.image } alt="produtos" />
        <div className="descricao-content">
          <p>{ produto.title }</p>
          <div className="rating">
            <Rating rate={ produto.rating.rate }/>
            <p> {`(${ produto.rating.count })`} </p>
          </div>
          <div className="descricao">
            <p>{ produto.description }</p>
          </div>
        </div>
        { btn(produto) }
      </div>
    ))
  }

  return (
    <div className="produtos">
      <Header />
      {
        produtos.length < 1 ?
        <Loading /> :
        <div>
          <h1 className="m-5">Produtos</h1>
          <div className="d-flex flex-wrap m-1 justify-content-evenly w-100">
            { listaProdutos() }
          </div>
        </div>
      }
    </div>
  );
}

export default Produtos;
