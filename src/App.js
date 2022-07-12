
import './App.css';
import Header from './components/header/Header';
import Valor from './components/valor/Valor';
import NomePagador from './components/nome_pagador/NomePagador'
import CpfCnpj from './components/cpfCnpj/CpfCnpj'
import Referencia from './components/referencia/Referencia';
import Cidade from './components/cidade/Cidade';
import Data from './components/data/Data';


function App() {
  return (
    <div class="box">
      <form>
        <Header nome="Recibo Simples" /><br />
        <label>
          <Valor />
        </label>
        <br />
        <label>
          <NomePagador />
        </label>
        <br />
        <label>
          <CpfCnpj />
        </label>
        <br />
        <label>
          <Referencia />
        </label>
        <br/>
        <label>
          <div class="row">
            <div class="column"><Cidade /></div>
            <div class="column"><Data /></div>
          </div>
        </label>
      </form>
    </div>
  );
}

export default App;
