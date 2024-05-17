import React from 'react';
import styled from 'styled-components';

const ProfilePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 420px auto;
`;

const BigSquare = styled.div`
  position: absolute;
  width: 70vw;
  height: 70vh;
  background: linear-gradient(90deg, #0FAA75 0%, #00693C 100%);  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SmallSquareContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const SmallSquare = styled.div`
  background-color: #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  height: 180px;
`;

const SmallSquareText = styled.div`
  text-align: center;
  margin-top: 5px;
  line-height: 2.5;
  color: #000;
  font-size: 18px;
`;

const BigSquareText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 1;
`;

const BigSquareText1 = styled.h2`
  position: absolute;
  top: 30%; /* Ajuste o valor conforme necessário */
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 1;
  font-size: 40px;
`

export default function Profile() {
  return (
    <ProfilePage>
      <MainContent>
      <BigSquareText1>Como podemos te ajudar?</BigSquareText1>
        <BigSquare>
          <BigSquareText>
          </BigSquareText>
          <SmallSquareContainer>
            <SmallSquare>
              <SmallSquareText>
                <h3>Local:</h3>
                <p>Avenida da Liberdade, 532</p>
                <p>São Paulo - SP</p>
              </SmallSquareText>
            </SmallSquare>
            <SmallSquare>
              <SmallSquareText>
               <h3>Telefone:</h3>
                <p>40028922</p>
                <p></p>
              </SmallSquareText>
            </SmallSquare>
            <SmallSquare>
              <SmallSquareText>
                <h3>Email:</h3>
                <p>fecapAlunos@hotmail.com</p>
                <p></p>
              </SmallSquareText>
            </SmallSquare>
          </SmallSquareContainer>
        </BigSquare>
      </MainContent>
    </ProfilePage>
  );
}
