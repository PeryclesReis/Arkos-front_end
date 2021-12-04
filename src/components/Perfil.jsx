import React, { useEffect, useState } from 'react';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form } from 'react-bootstrap';
import { apiAtualizaUsuario } from '../services/apiBackEnd';
import Header from './Header';

function PerfilComp({ props }) {
  const INITIAL_USUARIO = {
    nomeAntigo: '',
    emailAntigo: '',
    novoNome: '',
    novoEmail: '',
    novaSenha: '',
  };
  const [isDisabled, setIsDisabled] = useState(true);
  const [usuario, setUsuario] = useState(INITIAL_USUARIO);

  useEffect(() => {
    const { history } = props;

    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      history.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchApi = async (dados) => {
    return await apiAtualizaUsuario(dados).then(({data}) => data);
  };

  const handleChange = async ({ target: { name, value } }) => {
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

   const handleClick = async () => {
    const { history } = props;

    const res = await fetchApi(usuario);
    if(res.code) {
      return alert(res.message);
    }

    alert(res.message);
    return history.push('/');
  };

  const inputsLogin = () => {
    return (
      <Form className="form-edita">
        <Form.Group>
          <Form.Label>Nome antigo</Form.Label>
          <Form.Control
            className="input-email"
            size="lg"
            type="nome"
            name="nomeAntigo"
            value={ usuario.nomeAntigo }
            onChange={ handleChange }
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email antigo</Form.Label>
          <Form.Control
            className="input-email"
            size="lg"
            type="email"
            name="emailAntigo"
            value={ usuario.emailAntigo }
            onChange={ handleChange }
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Nome novo</Form.Label>
          <Form.Control
            className="input-email"
            size="lg"
            type="nome"
            name="novoNome"
            value={ usuario.novoNome }
            onChange={ handleChange }
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email novo</Form.Label>
          <Form.Control
            className="input-email"
            size="lg"
            type="email"
            name="novoEmail"
            value={ usuario.novoEmail }
            onChange={ handleChange }
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            className="input-senha"
            size="lg"
            type="password"
            name="novaSenha"
            value={ usuario.novaSenha }
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
          Alterar dados
        </Button>
      </Form>
    );
  }

  useEffect(() => {
    const inputsVerify = () => {
      const { novoNome, novoEmail, novaSenha } = usuario;

      if (typeof novoNome === 'string' && novoNome.length > 10 ) {
        // modelo que o regex de email verifica exemplo@exemplo.exemplo
        const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        const passwordRegex = new RegExp(/[\w\D]{8}/g);
        if (emailRegex.test(novoEmail) && passwordRegex.test(novaSenha)) {
          return setIsDisabled(false);
        }
        return setIsDisabled(true);
      }
      return setIsDisabled(true);
    };

    inputsVerify();
  }, [usuario]);

  return (
    <div>
      <Header props="false" />
      <div className="icon-content m-4 px-4">
      </div>
        { inputsLogin() }
    </div>
  );
}

export default PerfilComp;
