import React, { useState } from 'react';
import './App.css'; // Supondo que você tenha um arquivo App.css para os estilos

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [generoSelecionado, setGeneroSelecionado] = useState(null);
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);
    if (!alturaNum || !pesoNum) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let interpretacao = '';

    if (imc < 18.5) {
      interpretacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      interpretacao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      interpretacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
      interpretacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 40) {
      interpretacao = 'Obesidade grau 2';
    } else {
      interpretacao = 'Obesidade grau 3';
    }

    setResultado(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${interpretacao}`);
  };

  const selecionarGenero = (genero) => {
    setGeneroSelecionado(genero);
  };

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>

      <div className="handm">
        <button className={`button ${generoSelecionado === 'mulher' ? 'ativo' : ''}`} onClick={() => selecionarGenero('mulher')}>
          Mulher
        </button>
        <button className={`button ${generoSelecionado === 'homem' ? 'ativo' : ''}`} onClick={() => selecionarGenero('homem')}>
          Homem
        </button>
      </div>

      <div className="input-group">
        <h2>Altura</h2>
        <input
          type="text"
          placeholder="Metros (Ex.: 1.50)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>

      <div className="input-group">
        <h2>Peso</h2>
        <input
          type="text"
          placeholder="Kg"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>

      <div className="calc">
        <button className="calc-button" onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      {resultado && <pre className="resultado">{resultado}</pre>}
    </div>
  );
};

export default App;
