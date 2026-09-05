import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { linhas } from './dados';

export default function Analises() {
  let maiorArrecadacao = linhas[0];
  let arrecadacaoTotal = 0;

  for (let linha of linhas) {
    arrecadacaoTotal += linha.arrecadacao;

    if (linha.arrecadacao > maiorArrecadacao.arrecadacao) {
      maiorArrecadacao = linha;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Análises</Text>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>
          Arrecadação total
        </Text>

        <Text style={styles.numero}>
          R$ {arrecadacaoTotal}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>
          Linha com maior arrecadação
        </Text>

        <Text style={styles.numero}>
          {maiorArrecadacao.codigo}
        </Text>

        <Text>
          R$ {maiorArrecadacao.arrecadacao}
        </Text>
      </View>

      <Text style={styles.subtitulo}>
        Arrecadação por linha
      </Text>

      {linhas.map((linha) => (
        <View key={linha.id} style={styles.linha}>
          <Text>{linha.codigo}</Text>

          <Text>
            R$ {linha.arrecadacao}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  numero: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
  },
});