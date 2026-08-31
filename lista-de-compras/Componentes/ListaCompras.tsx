import { useState, useContext, useMemo, useCallback } from 'react';
import { UsuarioContext } from './context/UsuarioContext';

export default function useListaComprasLogica() {
  const { nomeUsuario, logout } = useContext(UsuarioContext);

  const [itens, setItens] = useState<any[]>([]);
  const [novoItem, setNovoItem] = useState('');
  const [busca, setBusca] = useState('');

  const adicionarItem = useCallback(() => {
    if (novoItem.trim() === '') return;
    setItens((prev) => [
      ...prev,
      { id: Date.now().toString(), nome: novoItem, comprado: false }
    ]);
    setNovoItem('');
  }, [novoItem]);

  const alternarComprado = useCallback((id: string) => {
    setItens((prev) =>
      prev.map((item) => (item.id === id ? { ...item, comprado: !item.comprado } : item))
    );
  }, []);

  const itensFiltrados = useMemo(() => {
    return itens.filter((item) => item.nome.toLowerCase().includes(busca.toLowerCase()));
  }, [itens, busca]);

  const totalPendentes = useMemo(() => {
    return itens.filter((item) => !item.comprado).length;
  }, [itens]);

  return {
    nomeUsuario,
    logout,
    itens: itensFiltrados,
    novoItem,
    setNovoItem,
    busca,
    setBusca,
    totalPendentes,
    adicionarItem,
    alternarComprado,
  };
}