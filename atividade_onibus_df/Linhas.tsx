import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { linhas } from './dados';

export default function Linhas({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Linhas de Ônibus</Text>

      <FlatList
        data={linhas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate('Detalhes', {
                linha: item,
              })
            }
          >
            <Text style={styles.codigo}>{item.codigo}</Text>

            <Text>
              {item.origem} → {item.destino}
            </Text>

            <Text>Ônibus: {item.onibus}</Text>
            <Text>Passageiros: {item.passageiros}</Text>
            <Text>Tempo médio: {item.tempoMedio} minutos</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
  },

  codigo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});