import React from 'react';
import Header from './componentes/Header';
import styled from 'styled-components';
import SideBar from './componentes/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Pages/Inicio';
import Eventos from './componentes/Pages/Eventos';
import Perfil from './componentes/Pages/Perfil';
import Convites from './componentes/Pages/Convites';
import Ajuda from './componentes/Pages/Ajuda';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <BrowserRouter>
      <SideBar>
        <Routes>
          
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Eventos" element={<Eventos />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Convites" element={<Convites />} />
          <Route path="/Ajuda" element={<Ajuda />} />

        </Routes>
        </SideBar>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;

