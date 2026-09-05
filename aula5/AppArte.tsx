import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function AppArte() {
  return (
    <View style={styles.container}>

      {/* Primeira linha */}
      <View style={styles.row}>

        <View style={[styles.quadrante, { backgroundColor: '#F44336' }]}>
          <Image
            source={require('./assets/b1a58f9e4511b25bef547307c65d8109-removebg-preview (1).png')}
            style={styles.imagem}
          />

          <Text style={styles.texto}>
            Meat Dress
          </Text>
        </View>

        <View style={[styles.quadrante, { backgroundColor: '#FF9800' }]}>
          <Image
            source={require('./assets/b3987d0a86ec9395792955093f73a8b0-removebg-preview (1).png')}
            style={styles.imagem}
          />

          <Text style={styles.texto}>
            Applause
          </Text>
        </View>

      </View>

      {/* Segunda linha */}
      <View style={styles.row}>

        <View style={[styles.quadrante, { backgroundColor: '#4CAF50' }]}>
          <Image
            source={require('./assets/ccd3dd34ac009264a59f638b4dd2c17e-removebg-preview (1) (1).png')}
            style={styles.imagem}
          />

          <Text style={styles.texto}>
            Telephone
          </Text>
        </View>

        <View style={[styles.quadrante, { backgroundColor: '#FFEB3B' }]}>
          <Image
            source={require('./assets/549335468ea8c561aca933141821f30e-removebg-preview (1).png')}
            style={styles.imagem}
          />

          <Text style={styles.texto}>
            Honey Bee
          </Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  quadrante: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  imagem: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },

  texto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 8,
  },

});