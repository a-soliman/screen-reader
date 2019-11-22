import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const Header = () => {
  const user = useContext(UserContext);
  console.log({ user });

  return (
    <header>Header</header>
  );
};

export default Header;