import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Inicio from './components/pages/Inicio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Eventos from './components/pages/Eventos';
import Convites from './components/pages/Convites';
import Perfil from './components/pages/Perfil';
import SideBar from './components/SideBar';
import Ajuda from './components/pages/Ajuda';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SideBar>
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/eventos' component={Eventos} />
          <Route path='/convite' component={Convites} />
          <Route path='/perfil' component={Perfil} />
          <Route path='/Ajuda' component={Ajuda} />
        </Switch>
        </SideBar>
      </Router>
    </>
  );
}

export default App;