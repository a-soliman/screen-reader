import React, { useState } from 'react';

// Dialogs
import SignupDialog from '../components/dialogs/Signup';
import LoginDialog from '../components/dialogs/Login';

const DialogContext = React.createContext();

const DialogContextProvider = props => {
  const [dialog, setDialog] = useState(null);

  const closeDialog = () => setDialog(null);

  const displayDialog = () => {
    if (!dialog) return null;
    let DialogComponent;
    switch(dialog.type.toLowerCase().trim()) {
      case 'signup':
        DialogComponent = SignupDialog;
        break;
      case 'login':
        DialogComponent = LoginDialog;
        break;
      default:
        DialogComponent = null;
    }

    if (!DialogComponent) return null;
    return (<DialogComponent submitHandler={dialog.submitHandler} closeDialog={closeDialog} />);
  };

  return (
    <DialogContext.Provider value={{ dialog: dialog, setDialog }}>
      {displayDialog()}
      {props.children}
    </DialogContext.Provider>
  );
};

export { DialogContextProvider as default, DialogContext };
