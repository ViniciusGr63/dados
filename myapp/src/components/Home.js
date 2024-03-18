import React, { useState } from "react";
import { Dado } from './dado';
import './dados.css'; 

export default function Home() {
  const [dadoJogador1, setDadoJogador1] = useState();
  const [dadoJogador2, setDadoJogador2] = useState();
  
  const handleClickJogarJogador1 = () => {
    const valor = Math.floor(Math.random() * 6) + 1;
    setDadoJogador1(valor);
  }

  const handleClickJogarJogador2 = () => {
    const valor = Math.floor(Math.random() * 6) + 1;
    setDadoJogador2(valor);
  }
  
  return (
    <div className="container">
      <h1 className="title">Jogo de Dados</h1>

      <div className="jogador">
        <h2>Jogador 1</h2>
        <Dado valor={dadoJogador1} />
        <button onClick={handleClickJogarJogador1}>Jogar Dado</button>
      </div>

      <div className="jogador">
        <h2>Jogador 2</h2>
        <Dado valor={dadoJogador2} />
        <button onClick={handleClickJogarJogador2}>Jogar Dado</button>
      </div>
    </div>
  );
}
