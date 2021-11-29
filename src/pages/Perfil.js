import React, { useEffect, useState } from 'react';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form } from 'react-bootstrap';
import "../styles/Perfil.css"

function Perfil() {
  const INITIAL_LOGIN = {
    nome: '',
    email: '',
    novoEmail: '',
  };
  const [isDisabled, setIsDisabled] = useState(true);
  const [login, setLogin] = useState(INITIAL_LOGIN);

  const handleChange = async ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

   // funcao para capturar ação de click e salvar dados do user no localStorage
   const handleClick = () => {
    // const user = {
    //   nome: login.nome,
    //   email: login.email,
    // };
    // localStorage.setItem('user', JSON.stringify(user));
    // const { history } = props;
    // será enviado para a tela de produtos
    // history.push('/');
  };

  const inputsLogin = () => {
    return (
      <Form className="form-edita">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nome completo</Form.Label>
          <Form.Control
            className="input-email"
            size="lg"
            type="nome"
            name="nome"
            value={ login.nome }
            onChange={ handleChange }
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="input-email"
            size="lg"
            type="email"
            name="email"
            value={ login.email }
            onChange={ handleChange }
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Novo email</Form.Label>
          <Form.Control
            className="input-email"
            size="lg"
            type="email"
            name="novoEmail"
            value={ login.email }
            onChange={ handleChange }
            autoComplete="off"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          disabled={ isDisabled }
          onClick={ handleClick }
          className="btn-cadastro"
        >
          Alterar dados
        </Button>
      </Form>
    );
  }


  useEffect(() => {
    const inputsVerify = () => {
      const { nome, email, password } = login;
      if (typeof nome === 'string' && nome.length > 10 ) {
        // modelo que o regex de email verifica exemplo@exemplo.exemplo
        const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        const passwordRegex = new RegExp(/[\w\D]{7}/g);
        if (emailRegex.test(email) && passwordRegex.test(password)) {
          return setIsDisabled(false);
        }
        return setIsDisabled(true);
      }
      return setIsDisabled(true);
    };

    inputsVerify();
  }, [login]);

  return (
    <div>
      <div className="icon-content m-4 px-4">
        <FontAwesomeIcon className="icon-logo" icon={ faGifts } />
        <span>Arkos Prod</span>
      </div>
        { inputsLogin() }
    </div>
  );
}

export default Perfil;
