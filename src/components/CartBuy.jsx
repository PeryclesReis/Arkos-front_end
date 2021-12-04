import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Cartbuy.css';
import { Dropdown } from 'react-bootstrap';

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
      <span>Olá,
        <Dropdown>
          <Dropdown.Toggle className="mx-2" size="sm" id="dropdown-basic">
            { usuario }
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/perfil">Editar</Dropdown.Item>
            <Dropdown.Item href="/carrinho">Carrinho</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </span>
    </div>
  );
}

export default CartBuy;
