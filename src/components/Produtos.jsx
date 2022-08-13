import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import ContextProdutos from '../provider/ContextProdutos';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function ProdutosComp({ props }) {
  const { produtos } = useContext(ContextProdutos);

  useEffect(() => {
    const { history } = props;

    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      history.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (produto) => {
    const item = [produto];
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
        <div className='image-container'>
          <img className="image" src={ produto.image } alt="produtos" />
        </div>
        <div className="descricao-content">
          <div className="rating">
            <Rating rate={ produto.rating.rate }/>
            <p> {`(${ produto.rating.count })`} </p>
          </div>
          <p>{ produto.title }</p>
        </div>
        { btn(produto) }
        <Link to={`/produto/detalhes/${produto.id}`} key={ produto.id }>
          Mais detalhes
        </ Link>
      </div>
    ))
  }

  return (
    <div className='produtos'>
      <Header props='true' />
      {
        produtos.length < 1 ?
        <Loading /> :
        <div>
          <div className="d-flex flex-wrap m-1 justify-content-evenly w-100">
            { listaProdutos() }
          </div>
        </div>
      }
    </div>
  );
}

export default ProdutosComp;
