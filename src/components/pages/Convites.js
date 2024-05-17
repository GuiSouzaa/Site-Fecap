import React from 'react';
import styled from 'styled-components';
import QRCode from 'react-qr-code';

const PageContainer = styled.div`
  margin-top: 20vh;
`;

const BigSquare = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 90%; /* Ajuste a largura do BigSquare */
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  background-color: #efefef;
  border: 2px solid #ccc;
  border-radius: 10px;
`;

const SmallSquare = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #efefef;
  border: 2px solid #ccc;
  border-radius: 10px;
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
