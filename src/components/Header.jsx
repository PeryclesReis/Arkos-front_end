import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts, faSearch } from '@fortawesome/free-solid-svg-icons';
import CartBuy from './CartBuy';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header({ carProps }) {
  const form = () => {
    return (
      <Form className="d-flex w-75 ms-4 rounded-pill">
        <FormControl
          type="search"
          placeholder="Busque por produtos "
          className="me-2 rounded-pill"
          aria-label="Search"
        />
        <Button className="px-4 py-2 rounded-pill"><FontAwesomeIcon icon={ faSearch } /></Button>
      </Form>
    );
  }

  return (
    <div className="header">
      <div className="logo-cart">
        <div className="icon-content">
          <Link to="/carrinho">
            <FontAwesomeIcon className="icon-logo" icon={ faGifts } />
          </Link>
          <span>Arkos Prod</span>
        </div>
        <CartBuy />
      </div>
      { !carProps ? form() : null }
    </div>
  );
}

export default Header;
