import '../styles/ProdutoDetalhes.css';
import DetalhesComp from '../components/DetalhesPro';

function ProdutoDetalhes({ match: { params } }) {
 return (
   <DetalhesComp params={params} />
 )
}

export default ProdutoDetalhes;
