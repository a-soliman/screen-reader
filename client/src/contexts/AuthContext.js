import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const login = data => { console.log('login was called from context.'); };
  const signup = data => { console.log('Signup was called from context.'); };
  const logOut = () => { console.log('SignOut was called from context.'); };

  return (
    <AuthContext.Provider value={{ user, login, signup, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider as default, AuthContext };

