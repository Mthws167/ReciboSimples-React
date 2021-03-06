
import './App.css';
import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
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
import GerarRecibo from './components/gerarRecibo/GerarRecibo.jsx';





function App() {
  return (
    <div>
        <div class="box">
          <form onSubmit="resultado()" method="post" id="form1">
            <Header nome="Recibo Simples" />
            <label>
              <Valor />
            </label>

            <label>
              <NomePagador />
            </label>

            <label>
              <CpfCnpjPagador onkeypress="$(this).mask(CpfCnpjMask, cpfCnpjpOpcao)" />
            </label>

            <label>
              <Referencia />
            </label>

            <label>
              <div class="row">
                <div class="column"><Cidade /></div>
                <div class="column"><Data pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" /></div>
              </div>
            </label>

            <label>
              <NomeEmissor />
            </label>
            <label>
              <div class="row">
                <div class="column"><Telefone /></div>
                <div class="column"><CpfCnpjEmissor onkeypress="$(this).mask(CpfCnpjMask, cpfCnpjpOpcao)" /></div>
              </div>
            </label>
            <br />
            <label>
              <FormaPagamento />
            </label>
            <table class="row" id="pagamento-pix" display="">
              <td class="col-1">
                <h4>Quem recebeu?</h4>
                <input class="input-quem-recebeu" id="quem-recebeu-fm" required type="text" />
              </td>
              <td class="col-2">
                <h4>Institui????o/Banco:</h4>
                <input class="input-instituicao-banco" id="instituicao-banco-fm" required type="text" />
              </td>
              <td class="col-3">
                <h4>Chave:</h4>
                <input class="input-chave" id="chave-fm" type="text" required />
              </td>
            </table>
            <table class="row" id="pagamento-cheque">
              <td class="column-numero-cheque">
                <h4>N?? do Cheque:</h4>
                <input class="input-numero-cheque" id="numero-cheque-fm" required type="number" />
              </td>
              <td class="column-banco">
                <h4>Banco:</h4>
                <input class="input-banco" id="banco-fm" required type="text" />
              </td>
              <td class="column-agencia">
                <h4>Ag??ncia:</h4>
                <input class="input-agencia" id="agencia-fm" type="number" required />
              </td>
              <td class="column-bom-para">
                <h4>Bom para...</h4>
                <input class="input-bom-para" id="bom-para-fm" type="text" required placeholder="00/00/0000"
                  maxlength="10" />
                <p>Somente n??meros</p>
              </td>
            </table>
            <table class="row" id="pagamento-trans-dep-1">
              <td class="column-conta">
                <h4>Conta:</h4>
                <input class="input-conta" id="conta-fm" required type="number" />
              </td>
              <td class="column-agencia-td">
                <h4>Ag??ncia:</h4>
                <input class="input-agencia-td" id="agencia-trans-dep-fm" required type="number" />
              </td>
              <td class="column-data-td">
                <h4>Data:</h4>
                <input class="input-data-td" maxlength="10" id="data-trans-dep-fm" type="text" placeholder="00/00/0000" />
              </td>
            </table>
            <table class="row" id="pagamento-trans-dep-2">
              <td class="column-banco-td">
                <h4>Banco:</h4>
                <input class="input-banco-td" id="banco-fm-td" type="text" required />
              </td>
              <td class="column-favorecido">
                <h4>Favorecido:</h4>
                <input class="input-favorecido" id="favorecido-fm" type="text" required />
              </td>
              <td class="column-numero-documento">
                <h4>N?? do documento:</h4>
                <input class="input-numero-documento" id="numero-doc-fm-td" type="number" />
                <p class="help">(opicional)</p>
              </td>
            </table>
            <label>
              <DuasVias />
            </label>
            <br />
            <label>
              <GerarRecibo />
            </label>
          </form>
        </div>
        <div id="reciboImprimir">
          <div id="button">
            <p>
              <input type="hidden" name="gerarRecibo" />
              <button type="submit" class="submit" onclick="voltar()">
                <span>Voltar</span>
              </button>
            </p>
            <div id="reciboPraImprimir" class="bordaRecibo">
              <h1 class="titulo">Recibo do pagamento</h1>
              <div>
                <label class="displayDiv" id="labelPrimeiraVia">
                  <h3>1?? Via</h3>
                </label>
                <label id="labelPreco"><b class="displayDiv" id="valorPago"></b></label>
              </div>
              <div>
                <p id="menssagem1" class="menssagem"></p>
                <p id="menssagem2" class="menssagem">Para maior clareza frimamos o presente recibo para que produza os seus efeitos, dando plena, rasa e irrevog??vel
                  quita????o, pelo valor recebido.</p>
              </div>
              <div>
                <p id="dataImpressao"></p>
              </div>
            </div>
          </div>
        </div>
        <div id="reciboImprimir">
          <div id="button">
            <div id="reciboPraImprimir" class="bordaRecibo">
              <h1 class="titulo">Recibo do pagamento</h1>
              <div>
                <label class="displayDiv" id="labelPrimeiraVia">
                  <h3>2?? Via</h3>
                </label>
                <label id="labelPreco"><b class="displayDiv" id="valorPago"></b></label>
              </div>
              <div>
                <p id="menssagem1" class="menssagem"></p>
                <p id="menssagem2" class="menssagem">Para maior clareza frimamos o presente recibo para que produza os seus efeitos, dando plena, rasa e irrevog??vel
                  quita????o, pelo valor recebido.</p>
              </div>
              <div>
                <p id="dataImpressao"></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;




