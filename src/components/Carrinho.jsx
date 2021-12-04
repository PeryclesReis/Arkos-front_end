import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading.jsx';
import Header from '../components/Header';
import Rating from '../components/Rating';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function CarrinhoComp({ props }) {
  const [produtos, setProduto] = useState([]);

  const listaItens = () => {
    const itens = JSON.parse(localStorage.getItem('itens'));
    setProduto(itens);
  }

  useEffect(() => {
    const { history } = props;
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      history.push('/');
    }

    const itens = JSON.parse(localStorage.getItem('itens'));
    if (!itens) {
      localStorage.setItem('itens', JSON.stringify([]));
    }
    listaItens();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (item) => {
     const itens = JSON.parse(localStorage.getItem('itens'));
    const res = itens.filter((produto) => produto.id !== item.id);
    localStorage.setItem('itens', JSON.stringify(res));
    listaItens();
  };

  const btnRemove = (produto) => {
    return (
      <Button
        variant="primary"
        type="button"
        onClick={ () => handleClick(produto) }
        className="btn-remove bg-danger border-danger rounded-circle"
      >
        <FontAwesomeIcon className="icon-remover" icon={ faTrashAlt } />
      </Button>
    );
  }

  const listaProdutos = () => {
    return produtos.length < 1 ?
      'Carrinho vazio!' :
      produtos.map((produto) => (
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
          !produtos ?
          <Loading /> :
          listaProdutos()
        }
      </div>
    </div>
  );
}

export default CarrinhoComp;
