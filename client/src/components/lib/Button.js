import React from 'react';

const Button = ({ children, className, onClick, loading, disabled, ...rest }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
      >
      { loading ? 'Loading...' : children }
    </button>);
};

export default Button;