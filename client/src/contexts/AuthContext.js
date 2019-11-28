/* eslint-disable no-debugger */
import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGNUP_MUTATION, LOGIN_MUTATION } from '../utils/graphqlOperations';
import authUtils from '../utils/authUtils';

const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [signup, { data: signupData, loading: signupLoading, error: signupError }] = useMutation(SIGNUP_MUTATION);
  const [login, { data: loginData, loading: loginLoading, error:loginError }] = useMutation(LOGIN_MUTATION);

  useEffect(() => {
    if (authUtils.isLoggedIn) {
      const user = authUtils.getUser();
      setUser(user);
    }
  }, []);

  useEffect(() => {
    if ( signupLoading || loginLoading ) {
      setLoading(true);
      setErrors([]);
    }
    if ( signupError || loginError ) {
      const errorSource = signupError ? signupError : loginError;
      setErrors(errorSource.graphQLErrors);
    }

    if (signupData || loginData) {
      const dataSource = signupData ? signupData : loginData;
      let key = signupData ? 'createUser' : 'login';
      const { user, token } = dataSource[key];
      setUser(user);
      authUtils.setUserAndToken(token, user);
    }
  }, [signupLoading, loginLoading, signupError, loginError, signupData, loginData]);

  const logOut = () => {
    authUtils.removeTokenAndUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};



export { AuthContextProvider as default, AuthContext };

