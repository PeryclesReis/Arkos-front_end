import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Figure, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { apiLogin } from '../services/apiBackEnd';
import '../styles/Login.css';

function Login(props) {
  const INITIAL_LOGIN = {
    email: '',
    password: '',
  };
  const [isDisabled, setIsDisabled] = useState(true);
  const [login, setLogin] = useState(INITIAL_LOGIN);

  useEffect(() => {
    localStorage.clear();
  }, [])

  const fetchApi = async (email, password) => {
    return apiLogin(email, password).then(({data}) => data);
  }

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const { history } = props;
    const { email, password } = login;

    const res = await fetchApi(email, password);

    if (res.code) {
      return history.push('/cadastrar');
    }
    localStorage.setItem('token', JSON.stringify(res.token));
    localStorage.setItem('user', JSON.stringify(res.usuario.nome));
    return history.push('/produtos');
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
      <Form className="form-login">
        <h2>Seja bem vindo!</h2>
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
        <Button
          variant="primary"
          type="button"
          disabled={ isDisabled }
          onClick={ handleClick }
          className="btn-login"
        >
          Entrar
        </Button>
        <Form.Text className="text-center">
          Ainda não possui cadastro?
        <Link to="/cadastrar">Cadastre-se</Link>
        </Form.Text>
      </Form>
    );
  }


  useEffect(() => {
    const inputsVerify = () => {
      const { email, password } = login;
      // modelo que o regex de email verifica exemplo@exemplo.exemplo
      const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      const passwordRegex = new RegExp(/[\w\D]{7}/g);
      if (emailRegex.test(email) && passwordRegex.test(password)) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };

    inputsVerify();
  }, [login]);

  return (
    <div>
      <div className="icon-content m-4 px-4">
        <FontAwesomeIcon className="icon-logo" icon={ faGifts } />
        <span>Arkos Prod</span>
      </div>
      <div className="login">
        <div className="imagem-login">
          { imageLogin() }
        </div>
        <div className="card-login">
          { inputsLogin() }
        </div>
      </div>
    </div>
  );
}

export default Login;
