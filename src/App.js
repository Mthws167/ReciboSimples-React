
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Valor from './components/valor/Valor';
import NomePagador from './components/nome-pagador/NomePagador'
import CpfCnpjPagador from './components/cpfCnpjPagador/CpfCnpjPagador'
import Referencia from './components/referencia/Referencia';
import Cidade from './components/cidade/Cidade';
import Data from './components/data/Data';
import NomeEmissor from './components/nome-emissor/NomeEmissor';
import Telefone from './components/telefone/Telefone';
import CpfCnpjEmissor from './components/cpfCnpjEmissor/CpfCnpjEmissor'
import FormaPagamento from './components/formasPagamento/FormaPagamento';
import DuasVias from './components/duaVias/DuasVias';
import GerarRecibo from './components/gerarRecibo/GerarRecibo';

function App() {
  return (
    <div>
      <div class="box">
        <form>
          <Header nome="Recibo Simples" />
          <label>
            <Valor />
          </label>
          
          <label>
            <NomePagador />
          </label>
          
          <label>
            <CpfCnpjPagador />
          </label>
          
          <label>
            <Referencia />
          </label>
          
          <label>
            <div class="row">
              <div class="column"><Cidade /></div>
              <div class="column"><Data /></div>
            </div>
          </label>
          
          <label>
            <NomeEmissor/>
          </label>
          <label>
            <div class="row">
              <div class="column"><Telefone/></div>
              <div class="column"><CpfCnpjEmissor /></div>
            </div>
          </label>
          <br/>
          <label>
            <FormaPagamento/>
          </label>
          <label>
            <DuasVias/>
          </label>
          <br/>
          <label>
            <GerarRecibo/>
          </label>
        </form>
      </div>
    </div>

  );
}

export default App;
