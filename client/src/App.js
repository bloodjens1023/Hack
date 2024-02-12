import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Switch, Route, Routes, Router } from 'react-router-dom';
import Utilisateur from './pages/Utilisateur';

import FormInscription from './components/FormInscription';
import PageProfil from './pages/pageProfil';

import LoginPage from './pages/Connexion';
import ActuPage from './pages/ActuPage';
import Accueil from './pages/Accueil';

// import PageConnection from './pages/Connexion';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/actu' element={<ActuPage />} />
      <Route path='/connection' element={<LoginPage />} />
      <Route path="/inscription" element={<FormInscription />} />
      <Route path="/utilisateur" element={<Utilisateur />} />
      <Route path="/utilisateur/info" element={<PageProfil />} />
    </Routes>

  );
}

export default App;
