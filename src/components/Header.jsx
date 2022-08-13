import React, { useEffect, useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts, faSearch } from '@fortawesome/free-solid-svg-icons';
import CartBuy from './CartBuy';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header({ props }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(props);
  }, []);

  const handleClick = ({target}) => {
    setSearch(target.value);
  }

  const form = () => {
    return (
      <Form className="d-flex w-50 ms-4 rounded-pill">
        <FormControl
          type="search"
          placeholder="Busque por produtos "
          className="me-2 rounded-pill"
          aria-label="Search"
          onclick={handleClick}
        />
        <Button className="px-4 py-2 rounded-pill"><FontAwesomeIcon icon={ faSearch } /></Button>
      </Form>
    );
  }

  return (
    <div className="header">
      <div className="logo-cart">
        <div className="icon-content">
          <Link to="/produtos">
            <FontAwesomeIcon className="icon-logo" icon={ faGifts } />
          </Link>
          <span>Arkos Prod</span>
        </div>
        { props === "true" ? form() : '' }
        { props ? <CartBuy /> : null }
      </div>
    </div>
  );
}

export default Header;
