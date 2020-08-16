import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = email.trim().toLowerCase();
  /*
    Ya que no se pueden mandar @ debemos convertir el email
    a formato binario
  */
  const hash = md5(formattedEmail, { encoding: 'binary' });
  return `${base}${hash}`;
};

export default gravatar;
