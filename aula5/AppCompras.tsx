import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function AppCompras() {

  const [nomeUsuario, setNomeUsuario] = useState('');
  const [nomeDigitado, setNomeDigitado] = useState('');

  const [itens, setItens] = useState<any[]>([]);
  const [novoItem, setNovoItem] = useState('');
  const [busca, setBusca] = useState('');

  const fazerLogin = () => {

    if (nomeDigitado.trim() !== '') {
      setNomeUsuario(nomeDigitado);
    }

  };

  const sair = () => {
    setNomeUsuario('');
    setNomeDigitado('');
  };

  const adicionarItem = () => {

    if (novoItem.trim() === '') {
      return;
    }

    const novo = {
      id: Date.now().toString(),
      nome: novoItem,
      comprado: false
    };

    setItens([...itens, novo]);
    setNovoItem('');
  };

  const alternarComprado = (id: string) => {

    const novaLista = itens.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          comprado: !item.comprado
        };
      }

      return item;
    });

    setItens(novaLista);
  };

  const itensFiltrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const totalPendentes = itens.filter(
    (item) => !item.comprado
  ).length;

  if (nomeUsuario === '') {

    return (
      <View style={styles.login}>

        <Text style={styles.titulo}>
          Faça seu Login
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome..."
          value={nomeDigitado}
          onChangeText={setNomeDigitado}
        />

        <Button
          title="Entrar"
          onPress={fazerLogin}
        />

      </View>
    );
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.boasVindas}>
          Olá, {nomeUsuario}!
        </Text>

        <TouchableOpacity onPress={sair}>
          <Text style={styles.sair}>
            Sair
          </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.subtitulo}>
        Lista de Compras
      </Text>

      <View style={styles.linha}>

        <TextInput
          style={styles.inputItem}
          placeholder="Novo item..."
          value={novoItem}
          onChangeText={setNovoItem}
        />

        <Button
          title="Adicionar"
          onPress={adicionarItem}
        />

      </View>

      <TextInput
        style={styles.input}
        placeholder="Buscar item..."
        value={busca}
        onChangeText={setBusca}
      />

      <Text style={styles.contador}>
        Itens pendentes: {totalPendentes}
      </Text>

      <FlatList
        data={itensFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <TouchableOpacity
            style={[
              styles.item,
              item.comprado && styles.itemComprado
            ]}
            onPress={() => alternarComprado(item.id)}
          >

            <Text
              style={[
                styles.itemTexto,
                item.comprado && styles.itemTextoComprado
              ]}
            >
              {item.nome}
            </Text>

            <Text>
              {item.comprado ? 'Comprado' : 'Pendente'}
            </Text>

          </TouchableOpacity>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },

  linha: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  inputItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  boasVindas: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  sair: {
    color: 'red',
    fontWeight: 'bold',
  },

  contador: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eeeeee',
  },

  itemComprado: {
    backgroundColor: '#e0ffe0',
  },

  itemTexto: {
    fontSize: 16,
  },

  itemTextoComprado: {
    textDecorationLine: 'line-through',
    color: '#888888',
  },

});