
import './App.css';
import Header from './components/header/Header';
import Valor from './components/valor/Valor';
import NomePagador from './components/nome_pagador/NomePagador'
import CpfCnpj from './components/cpfCnpj/CpfCnpj'
import Referencia from './components/referencia/Referencia';


function App() {
  return (
    <div >
      <form>
        <Header nome="Recibo Simples" /><br />
        <label>
          <Valor />
        </label>
        <br />
        <label>
          <NomePagador />
        </label>
        <br/>
        <label>
          <CpfCnpj/>
        </label>
        <br/>
        <label>
          <Referencia/>
        </label>
      </form>
    </div>
  );
}

export default App;
