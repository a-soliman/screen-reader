import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import GlobalStateProvider from './contexts/GlobalState';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStateProvider>
        <Header />
        <Footer />
      </GlobalStateProvider>
    </ApolloProvider>

  );
}

export default App;
