import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Valor from './components/valor/Valor';
import NomePagador from './components/nome_pagador/NomePagador'


function App() {
  return (
    <div >
      <form>
        <Header nome="Recibo Simples" /><br/>
        <label>
          <Valor/>
        </label>
        <br/>
        <label> 
          <NomePagador/>
        </label>
      </form>
    </div>
  );
}

export default App;
