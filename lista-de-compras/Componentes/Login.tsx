import { useState, useContext } from 'react';
import { UsuarioContext } from './context/UsuarioContext';

export default function useLoginLogica() {
  const [inputNome, setInputNome] = useState('');
  const { login } = useContext(UsuarioContext);

  const executarLogin = () => {
    if (inputNome.trim()) {
      login(inputNome);
    }
  };

  return {
    inputNome,
    setInputNome,
    executarLogin,
  };
}