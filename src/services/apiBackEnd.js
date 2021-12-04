import axios from 'axios';

export const apiLogin = async (email, senha) => axios({
  method: 'post',
  url: 'http://localhost:3004/api/login',
  data: {
    email,
    senha
  }
})
  .then(res => res)
  .catch(error => error.response);

export const apiCadastrar = async (nome, email, senha) => axios({
  method: 'post',
  url: 'http://localhost:3004/api/cadastrar',
  data: {
    nome,
    email,
    senha
  }
})
  .then(res => res)
  .catch(error => error.response);

export const apiAtualizaUsuario = async (dados) => axios({
  method: 'put',
  url: 'http://localhost:3004/api/perfil',
  data: {
    dados
  }
})
  .then(res => res)
  .catch(error => error.response);

export const apiProdutos = async () => axios({
  method: 'get',
  url: 'http://localhost:3004/api/produtos',
})
  .then(res => res)
  .catch(error => error.response);
