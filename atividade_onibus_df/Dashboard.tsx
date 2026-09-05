import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { linhas } from './dados';

export default function Dashboard() {
  let totalPassageiros = 0;
  let totalOnibus = 0;

  for (let linha of linhas) {
    totalPassageiros += linha.passageiros;
    totalOnibus += linha.onibus;
  }

  let maiorPassageiro = linhas[0];
  let maiorAtraso = linhas[0];

  for (let linha of linhas) {
    if (linha.passageiros > maiorPassageiro.passageiros) {
      maiorPassageiro = linha;
    }

    if (linha.atrasos > maiorAtraso.atrasos) {
      maiorAtraso = linha;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dashboard - Ônibus DF</Text>

      <View style={styles.card}>
        <Text style={styles.numero}>{totalPassageiros}</Text>
        <Text>Total de passageiros</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.numero}>{totalOnibus}</Text>
        <Text>Total de ônibus</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.numero}>{linhas.length}</Text>
        <Text>Total de linhas</Text>
      </View>

      <View style={styles.destaque}>
        <Text>Linha com mais passageiros</Text>
        <Text style={styles.textoGrande}>
          {maiorPassageiro.codigo}
        </Text>
        <Text>{maiorPassageiro.passageiros} passageiros</Text>
      </View>

      <View style={styles.destaque}>
        <Text>Linha com mais atrasos</Text>
        <Text style={styles.textoGrande}>
          {maiorAtraso.codigo}
        </Text>
        <Text>{maiorAtraso.atrasos} atrasos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 10,
  },

  numero: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  destaque: {
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
  },

  textoGrande: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
});