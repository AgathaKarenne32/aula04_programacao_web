import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { UsuarioProvider, UsuarioContext } from './Componentes/context/UsuarioContext';
import useLoginLogica from './Componentes/Login';
import useListaComprasLogica from './Componentes/ListaCompras';

function TelaLogin() {
  const { inputNome, setInputNome, executarLogin } = useLoginLogica();

  return (
    <View style={styles.containerLogin}>
      <Text style={styles.titulo}>Faça seu Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome..."
        placeholderTextColor="#888"
        value={inputNome}
        onChangeText={setInputNome}
      />
      <Button title="Entrar" onPress={executarLogin} />
    </View>
  );
}

function TelaLista() {
  const {
    nomeUsuario,
    logout,
    itens,
    novoItem,
    setNovoItem,
    busca,
    setBusca,
    totalPendentes,
    adicionarItem,
    alternarComprado,
  } = useListaComprasLogica();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boasVindas}>Olá, {nomeUsuario}!</Text>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.sairTexto}>Sair</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitulo}>Lista de Compras</Text>

      <View style={styles.linhaInput}>
        <TextInput
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
          placeholder="Novo item..."
          value={novoItem}
          onChangeText={setNovoItem}
        />
        <Button title="Adicionar" onPress={adicionarItem} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Buscar item..."
        value={busca}
        onChangeText={setBusca}
      />

      <Text style={styles.contador}>Itens pendentes: {totalPendentes}</Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemCard, item.comprado && styles.itemComprado]}
            onPress={() => alternarComprado(item.id)}
          >
            <Text style={[styles.itemTexto, item.comprado && styles.textoComprado]}>
              {item.nome}
            </Text>
            <Text style={styles.statusTexto}>{item.comprado ? 'Comprado' : 'Pendente'}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function MainNavigator() {
  const { nomeUsuario } = useContext(UsuarioContext);
  return nomeUsuario === '' ? <TelaLogin /> : <TelaLista />;
}

export default function App() {
  return (
    <UsuarioProvider>
      <MainNavigator />
    </UsuarioProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50, paddingHorizontal: 20 },
  containerLogin: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subtitulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10, width: '100%' },
  linhaInput: { flexDirection: 'row', gap: 10, marginBottom: 10, alignItems: 'center' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  boasVindas: { fontSize: 18, fontWeight: '600' },
  sairTexto: { color: 'red', fontWeight: 'bold' },
  contador: { fontSize: 16, fontWeight: 'bold', marginVertical: 10, color: '#555' },
  itemCard: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: '#f9f9f9', borderRadius: 8, marginBottom: 8, borderWidth: 1, borderColor: '#eee' },
  itemComprado: { backgroundColor: '#e0ffe0' },
  itemTexto: { fontSize: 16 },
  textoComprado: { textDecorationLine: 'line-through', color: '#888' },
  statusTexto: { fontSize: 14, color: '#666' },
});