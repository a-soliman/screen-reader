import React from 'react';
import { UserProvider } from './contexts/UserContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  const user = { name: 'Ahmed', loggedIn: true };
  return (
    <UserProvider value={user}>
      <div className="App">Screen Reader</div>
      <Header />
      <Footer />
    </UserProvider>
  );
}

export default App;
