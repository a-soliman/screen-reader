import React from 'react';
import AuthContextProvider from './AuthContext';
import DialogContextProvider from './DialogContext';

const GlobalStateProvider = (props) => {
  return (
    <AuthContextProvider>
      <DialogContextProvider>
        { props.children }
      </DialogContextProvider>
    </AuthContextProvider>
  );
};

export default GlobalStateProvider;