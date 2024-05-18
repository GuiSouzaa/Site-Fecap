import React from 'react';
import styled from 'styled-components';
import QRCode from 'react-qr-code';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 150px auto;
`;

const BigSquare = styled.div`
  position: relative;
  width: 60vw;
  height: 60vh;
  background-color: #EFEFEF;  
  display: flex;
  flex-wrap: wrap; /* Adicionando flex-wrap para que os quadrados pequenos possam quebrar para uma nova linha */
  align-items: flex-start;
  justify-content: flex-start; 
  border-radius: 20px;
  padding: 10px;
  padding-top: 80px;
  overflow-y: auto; 
  box-sizing: border-box;
`;

const SmallSquare = styled.div`
  width: calc(33.333% - 40px); /* Definindo a largura dos quadrados pequenos com margens */
  height: auto;
  display: flex;
  margin: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #efefef;
  border: 2px solid #ccc;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: calc(50% - 40px); /* Alterando a largura dos quadrados pequenos para 50% quando a largura da tela for menor que 768px */
  }

  @media (max-width: 480px) {
    width: calc(100% - 40px); /* Alterando a largura dos quadrados pequenos para 100% quando a largura da tela for menor que 480px */
  }
`;

const TextContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  line-height: 1.5;
`;

const BoldFirstSentence = styled.span`
  font-weight: bold;
`;

const QRSection = () => {
  return (
    <PageContainer>
      <BigSquare>
        <SmallSquare>
          <QRCode value="https://www.example.com/curso" size={150} />
          <TextContainer>
            <BoldFirstSentence><p>Palestra de Banco de Dados</p></BoldFirstSentence>
            <p>Data: XX/YY/ZZZZ</p>
            <p>Tempo: XX Horas</p>
            <p>Status: Não Iniciado</p>
            <p>Local: FECAP</p>
            <p>Formato: Remoto</p>
          </TextContainer>
        </SmallSquare>

        <SmallSquare>
          <QRCode value="https://www.example.com/data" size={150} />
          <TextContainer>
            <BoldFirstSentence><p>Palestra de Banco de Dados</p></BoldFirstSentence>
            <p>Data: XX/YY/ZZZZ</p>
            <p>Tempo: XX Horas</p>
            <p>Status: Não Iniciado</p>
            <p>Local: FECAP</p>
            <p>Formato: Remoto</p>
          </TextContainer>
        </SmallSquare>

        <SmallSquare>
          <QRCode value="https://www.example.com/horario" size={150} />
          <TextContainer>
            <BoldFirstSentence><p>Palestra de Banco de Dados</p></BoldFirstSentence>
            <p>Data: XX/YY/ZZZZ</p>
            <p>Tempo: XX Horas</p>
            <p>Status: Não Iniciado</p>
            <p>Local: FECAP</p>
            <p>Formato: Remoto</p>
          </TextContainer>
        </SmallSquare>
      </BigSquare>
    </PageContainer>
  );
}

export default QRSection;
