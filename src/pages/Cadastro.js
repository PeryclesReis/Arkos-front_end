import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Figure, Form } from 'react-bootstrap';
import '../styles/Cadastro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts } from '@fortawesome/free-solid-svg-icons';

const Cadastro = (props) => {
  const INITIAL_LOGIN = {
    nome: '',
    email: '',
    password: '',
    passwordConfirm: '',
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
    const user = {
      nome: login.nome,
      email: login.email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    const { history } = props;
    // será enviado para a tela de produtos
    history.push('/');
  };

  const imageLogin = () => {
    return(
      <Figure>
        <Figure.Image
          width={700}
          height={500}
          alt="636x500"
          src="https://i.pinimg.com/736x/0c/82/79/0c8279ae600f5aca424e5a4bb434f574.jpg"
        />
      </Figure>
    );
  }

  const inputsLogin = () => {
    return (
      <Form className="form-cadastro">
        <h2>Cadastre-se</h2>
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

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            className="input-senha"
            size="lg"
            type="password"
            name="password"
            value={ login.password }
            onChange={ handleChange }
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirme senha</Form.Label>
          <Form.Control
            className="input-senha"
            size="lg"
            type="password"
            name="passwordConfirm"
            value={ login.passwordConfirm }
            onChange={ handleChange }
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          disabled={ isDisabled }
          onClick={ handleClick }
          className="btn-cadastro"
        >
          Entrar
        </Button>
        <Form.Text className="text-center">
          Já possuo cadastro!
        <Link to="/"> Login</Link>
        </Form.Text>
      </Form>
    );
  }


  useEffect(() => {
    const inputsVerify = () => {
      const { nome, email, password , passwordConfirm } = login;
      if (typeof nome === 'string' && nome.length > 10 ) {
        // modelo que o regex de email verifica exemplo@exemplo.exemplo
        const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        const passwordRegex = new RegExp(/[\w\D]{7}/g);
        if (emailRegex.test(email) && passwordRegex.test(password)) {
          if (passwordConfirm === password) {
            return setIsDisabled(false);
          }
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
      <div className="cadastro">
        <div className="imagem-cadastro">
          { imageLogin() }
        </div>
        <div className="card-cadastro">
          { inputsLogin() }
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
