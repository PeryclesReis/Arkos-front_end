import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Figure, Form } from 'react-bootstrap';

function Login(props) {
  const INITIAL_LOGIN = {
    email: '',
    password: '',
  };
  const [isDisabled, setIsDisabled] = useState(true);
  const [login, setLogin] = useState(INITIAL_LOGIN);

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  // funcao para capturar ação de click e salvar dados do user no localStorage
  const handleClick = () => {
    const user = { email: login.email };
    localStorage.setItem('user', JSON.stringify(user));
    const { history } = props;
    // será enviado para a tela de produtos
    history.push('/produtos');
  };

  const imageLogin = () => {
    return(
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="https://previews.123rf.com/images/mustique/mustique1608/mustique160800048/64300111-dibujos-animados-ilustraci%C3%B3n-vectorial-de-una-mujer-de-moda-joven-con-bolsas-de-la-compra-aislados-e.jpg"
        />
      </Figure>
    );
  }

  const inputsLogin = () => {
    return (
      <Form className="">
        <h1>Seja bem vindo</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            placeholder="Enter email"
            name="email"
            value={ login.email }
            onChange={ handleChange }
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha:</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            name="password"
            value={ login.password }
            onChange={ handleChange }
            placeholder="Senha"
          />
        </Form.Group>
        <Button
          variant="success"
          type="button"
          disabled={ isDisabled }
          onClick={ handleClick }
          // className={  }
        >
          Entrar
        </Button>
        <Form.Text>
          Ainda não possui cadastro?
        <Link to="/cadastrar">Cadastre-se</Link>
        </Form.Text>
      </Form>
    );
  }

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

  useEffect(() => {
    inputsVerify();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);

  return (
    <div className="login">
      { imageLogin() }
      { inputsLogin() }
    </div>
  );
}

export default Login;
