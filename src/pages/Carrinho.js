import React, { useEffect, useState } from 'react';
import { produtoPorId } from '../services/apiProductId.js';
import Loading from '../components/Loading.jsx';
import Header from '../components/Header';
import Rating from '../components/Rating';
import { Button } from 'react-bootstrap';
import '../styles/Carrinho.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Carrinho() {
  const [produtos, setProduto] = useState([]);

  const fetchApi = () => {
    const itens = JSON.parse(localStorage.getItem('itens'));
    setProduto(itens);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const handleClick = () => {

  };

  const btnRemove = () => {
    return (
      <Button
        variant="primary"
        type="button"
        onClick={ handleClick }
        className="btn-remove bg-danger border-danger rounded-circle"
      >
        <FontAwesomeIcon className="icon-remover" icon={ faTrashAlt } />
      </Button>
    );
  }

  const listaProdutos = () => {
    return produtos.map(({produto}) => (
      <div className="produto-content" key={ produto.id }>
        <img className="imagem-produto" src={ produto.image } alt="produtos" />
        <div className="descricao-content">
          <h2>{ produto.title }</h2>
          <div className="rating-produto">
            <Rating rate={ produto.rating.rate }/>
            ( { produto.rating.count } )
          </div>
            <p className="descricao">{ produto.description }</p>
          <div className="">
          </div>
        </div>
        <div className="lixeira-preco">
          { btnRemove(produto) }
          <p>R$ { produto.price.toFixed(2) }</p>
        </div>
      </div>
    ))
  }

  return (
    <div className="carrinho">
      <Header carProps={'carrinho'} />
      <div>
        {
          produtos.length < 1 ?
          <Loading /> :
          listaProdutos()
        }
      </div>
    </div>
  );
}

export default Carrinho;
