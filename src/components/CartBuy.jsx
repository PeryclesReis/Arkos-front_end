import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Cartbuy.css';

const CartBuy = () => {
  const [usuario, setUsuario] = useState('');

  useEffect(() => {
    const nome = JSON.parse(localStorage.getItem('user'));

    if (!nome) {
      return setUsuario('Usuário');
    }
    return setUsuario(nome)
  }, [usuario]);

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
