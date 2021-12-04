import React from 'react';
import { Switch, Route } from 'react-router';
import Cadastro from './pages/Cadastro';
import Carrinho from './pages/Carrinho';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Produtos from './pages/Produtos';
import ProviderProdutos from './provider/ProviderProdutos';
import ProdutoDetalhes from './pages/ProdutoDetalhes';
import './App.css';

function App() {
  return (
    <ProviderProdutos>
      <Switch >
        <Route path="/cadastrar" component={ Cadastro } />
        <Route path="/carrinho" component={ Carrinho }/>
        <Route path="/produto/detalhes/:id" component={ ProdutoDetalhes } />
        <Route path="/produtos" component={ Produtos } />
        <Route path="/perfil" component={ Perfil } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </ProviderProdutos>
  );
}

export default App;
