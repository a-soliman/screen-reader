import React from 'react';
import GlobalStateProvider from './contexts/GlobalState';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <GlobalStateProvider>
      <Header />
      <Footer />
    </GlobalStateProvider>
  );
}

export default App;
