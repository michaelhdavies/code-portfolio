import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './styles.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {

  return (
    <>
      <HeaderComponent />
      {/* render content here */}
      <Outlet />
      <FooterComponent />
    </>
  )
};

export default App
