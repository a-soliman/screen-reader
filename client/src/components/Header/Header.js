import React, { useContext, Fragment } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { DialogContext } from '../../contexts/DialogContext';
import Button from '../lib/Button';

const Header = () => {
  const { user, signup, login, logOut } = useContext(AuthContext);
  const { setDialog } = useContext(DialogContext);

  function openSignupDialog() {
    const opts = {
      type: 'signup',
      submitHandler: signup
    };
    setDialog(opts);
  }

  function openLoginDialog() {
    const opts = {
      type: 'login',
      submitHandler: login
    };
    setDialog(opts);
  }

  return (
    <header className='header'>
      <div className="left">
        <h4 className="title">Screen Reader</h4>
      </div>
      <div className="right">
        {
          !user ? (
            <Fragment>
              <Button onClick={openLoginDialog}>Login</Button>
              <Button onClick={openSignupDialog}>Signup</Button>
            </Fragment>
          ) : (
            <Button onClick={logOut}>Logout</Button>
          )
        }
      </div>
    </header>
  );
};

export default Header;