import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Cartbuy.css';

const CartBuy = () => {
  const [usuario, setUsuario] = useState('');

  useEffect(() => {
    const nome = JSON.parse(localStorage.getItem('user'));
    const login = JSON.parse(localStorage.getItem('login'));
    if (!nome || !login) {
      return setUsuario('Usuário');
    }
    if (nome.email === login.email) {
      return setUsuario(nome.nome)
    }
  }, []);

  return (
    <div className="cartBuy d-flex">
      <Link to="/carrinho">
        <FontAwesomeIcon className="icon-cart" icon={ faShoppingCart } />
      </Link>
      <span>Olá, {usuario}</span>
    </div>
  );
}

export default CartBuy;
