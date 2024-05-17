import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css'; // Importação do Font Awesome

const GlobalStyles = createGlobalStyle`
  body {
    overflow-y: hidden;
    margin: 0;
    padding: 0;
  }
`;

const ProfilePage = styled.div`
  display: flex;
  justify-content: center; /* Para centralizar o conteúdo horizontalmente */
  align-items: flex-start;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; /* Para centralizar o conteúdo horizontalmente */
  align-items: center;
  max-width: 1000px; /* Defina o valor máximo que desejar */
  margin: 130px auto; /* Para centralizar o conteúdo horizontalmente */
`;

const BigSquare = styled.div`
  width: 1000px; /* Aumente ou diminua conforme necessário */
  height: 600px; /* Aumente ou diminua conforme necessário */
  background-color: #f0f0f0;
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
`;

const SmallSquare = styled.div`
  background-color: #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 45px auto;
  flex-direction: column;
  position: relative; /* Para permitir posicionamento absoluto do botão */
  width: 280px; /* Aumente ou diminua conforme necessário */
  height: 180px; /* Aumente ou diminua conforme necessário */
`;

const SmallSquareText = styled.div`
  text-align: center;
  margin-top: 5px;
  line-height: 2.5;
`;

const CourseButton = styled.button`
  position: absolute; /* Posicionamento absoluto */
  bottom: 10px;
  right: 10px; /* Alinhamento à direita */
  background-color: transparent;
  color: #007bff;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function Profile() {
  return (
    <>
      <GlobalStyles />
      <ProfilePage>
        <MainContent>
          <BigSquare>
            <SmallSquare>
              <SmallSquareText>
                <h3>Curso 1</h3>
                <p>Horário: 09:00</p>
                <p>Data: 01/01/2024</p>
                <p>Local: FECAP</p>
              </SmallSquareText>
              <CourseButton>
                <i className="fas fa-download" style={{ fontSize: '20px' }}></i>
              </CourseButton>
            </SmallSquare>
            <SmallSquare>
              <SmallSquareText>
                <h3>Curso 2</h3>
                <p>Horário: 10:00</p>
                <p>Data: 02/01/2024</p>
                <p>Local: FECAP</p>
              </SmallSquareText>
              <CourseButton>
                <i className="fas fa-download" style={{ fontSize: '20px' }}></i>
              </CourseButton>
            </SmallSquare>
            <SmallSquare>
              <SmallSquareText>
                <h3>Curso 3</h3>
                <p>Horário: 11:00</p>
                <p>Data: 03/01/2024</p>
                <p>Local: Remoto</p>
              </SmallSquareText>
              <CourseButton>
                <i className="fas fa-download" style={{ fontSize: '20px' }}></i>
              </CourseButton>
            </SmallSquare>
            <SmallSquare>
              <SmallSquareText>
                <h3>Curso 4</h3>
                <p>Horário: 12:00</p>
                <p>Data: 04/01/2024</p>
                <p>Local: Remoto</p>
              </SmallSquareText>
              <CourseButton>
                <i className="fas fa-download" style={{ fontSize: '20px' }}></i>
              </CourseButton>
            </SmallSquare>
            <SmallSquare>
              <SmallSquareText>
                <h3>Curso 5</h3>
                <p>Horário: 13:00</p>
                <p>Data: 05/01/2024</p>
                <p>Local: Remoto</p>
              </SmallSquareText>
              <CourseButton>
                <i className="fas fa-download" style={{ fontSize: '20px' }}></i>
              </CourseButton>
            </SmallSquare>
            <SmallSquare>
              <SmallSquareText>
                <h3>Curso 6</h3>
                <p>Horário: 14:00</p>
                <p>Data: 06/01/2024</p>
                <p>Local: Remoto</p>
              </SmallSquareText>
              <CourseButton>
                <i className="fas fa-download" style={{ fontSize: '20px' }}></i>
              </CourseButton>
            </SmallSquare>
          </BigSquare>
        </MainContent>
      </ProfilePage>
    </>
  );
}
