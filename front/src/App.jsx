import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './Pages/Routes';
import { ProjectListProvider } from './contexts/ProjectListContext';

function App() {
  return (
    <ProjectListProvider>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </ProjectListProvider>
  );
}

export default App;
