import React, { createContext, useState, useCallback } from 'react';

export const UsuarioContext = createContext({} as any);

export function UsuarioProvider({ children }: { children: React.ReactNode }) {
  const [nomeUsuario, setNomeUsuario] = useState('');

  const login = useCallback((nome: string) => {
    setNomeUsuario(nome);
  }, []);

  const logout = useCallback(() => {
    setNomeUsuario('');
  }, []);

  return (
    <UsuarioContext.Provider value={{ nomeUsuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
}