import React, { useState, useEffect } from 'react';
import Input from '../lib/Input';
import Button from '../lib/Button';

const SignupDialog = ({ submitHandler, closeDialog }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validData, setValidData] = useState(false);

  useEffect(() => validateData());

  function handleChange(evt) {
    const { name, value } = evt.target;
    let setter;
    switch(name) {
      case 'name':
        setter = setName;
        break;
      case 'email':
        setter = setEmail;
        break;
      case 'password':
        setter = setPassword;
        break;
      default:
        setter = null;
    }
    if (setter) setter(value);
  }

  function validateData() {
    let valid = true;
    // name
    if (name.trim().length < 2) valid = false;
    // email
    // eslint-disable-next-line no-useless-escape
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )) valid = false;
    // password
    if (password.length < 8) valid = false;
    setValidData(valid);
  }

  async function handleSubmitClick() {
    setLoading(true);
    const variables = {
      data: { name, email, password }
    };
    const res = await submitHandler({ variables });
    setLoading(false);
    if (res) closeDialog();
  }

  return (
    <div>
      <h4>Signup Form</h4>
      <button onClick={closeDialog}>Close</button>
      <form>
        <Input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          placeholder='Full name'
        />
        <Input
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          placeholder='name@example.com'
        />
        <Input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder='Password'
        />
        <Button
          onClick={handleSubmitClick}
          loading={loading}
          disabled={loading || !validData}
          >
          Signup
        </Button>
      </form>
    </div>
  );
};

export default SignupDialog;