import passwordGenerators from 'generate-password';

const generatePassword = () => {
  const password = passwordGenerators.generate({
    length: 8,
    numbers: true,
    uppercase: true,
    symbols: true
  });
  return password;
};

export default generatePassword;