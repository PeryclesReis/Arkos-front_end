import axios from 'axios';

// const apiLogin = axios({
//   method: 'get',
//   url: 'http://localhost:8000/api/login'
// })
//   .then(res => {
//     return res
//   });

const apiCadastrar = (nome, email, senha) => (
  axios.post('http://localhost:8000/api/cadastrar', {nome, email, senha})
  );

const apiLogin = (email, senha) => (
  axios.get('http://localhost:8000/api/login', {email, senha})
  );

const apiAtualizaUsuario = (nome, email, senha) => (
  axios.get('http://localhost:8000/api/perfil', {nome, email, senha})
  );

export {
  apiCadastrar,
  apiLogin,
  apiAtualizaUsuario
};
