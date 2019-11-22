import React from 'react';

const Button = ({ title, onClick, loading, disabled, ...props }) => {
  return (<button onClick={onClick} {...props}>{title}</button>);
};

export default Button;