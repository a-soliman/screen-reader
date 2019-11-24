import React from 'react';

const Input = ({ type='text', name, value, onChange, placeholder }) => {
  return (<input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />);
};

export default Input;