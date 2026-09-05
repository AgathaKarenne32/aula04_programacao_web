import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetalhesLinha({ route }: any) {
  const linha = route.params.linha;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Linha {linha.codigo}
      </Text>

      <Text style={styles.item}>
        Origem: {linha.origem}
      </Text>

      <Text style={styles.item}>
        Destino: {linha.destino}
      </Text>

      <Text style={styles.item}>
        Quantidade de ônibus: {linha.onibus}
      </Text>

      <Text style={styles.item}>
        Passageiros: {linha.passageiros}
      </Text>

      <Text style={styles.item}>
        Tempo médio das viagens: {linha.tempoMedio} minutos
      </Text>

      <Text style={styles.item}>
        Percentual de atrasos: {linha.atrasos}%
      </Text>

      <Text style={styles.item}>
        Ocupação média: {linha.ocupacao}%
      </Text>

      <Text style={styles.item}>
        Arrecadação: R$ {linha.arrecadacao}
      </Text>
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
    marginBottom: 25,
  },

  item: {
    fontSize: 17,
    marginBottom: 15,
  },
});