import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet
} from 'react-native';

export default function Dado() {

  const listaDeDados = [
    {
      valor: 1,
      frase: 'Ataque crítico (falhou)!',
      foto: 'https://cdn-icons-png.flaticon.com/512/565/565738.png'
    },
    {
      valor: 2,
      frase: 'Ataque muito fraco...',
      foto: 'https://cdn-icons-png.flaticon.com/512/565/565740.png'
    },
    {
      valor: 3,
      frase: 'Ataque normal.',
      foto: 'https://cdn-icons-png.flaticon.com/512/565/565741.png'
    },
    {
      valor: 4,
      frase: 'Ataque bom!',
      foto: 'https://cdn-icons-png.flaticon.com/512/565/565742.png'
    },
    {
      valor: 5,
      frase: 'Ataque muito forte!',
      foto: 'https://cdn-icons-png.flaticon.com/512/565/565743.png'
    },
    {
      valor: 6,
      frase: 'ACERTO CRÍTICO!',
      foto: 'https://cdn-icons-png.flaticon.com/512/565/565744.png'
    },
  ];

  const [faceAtual, setFaceAtual] = useState(listaDeDados[5]);

  const sortearDado = () => {

    const indice = Math.floor(
      Math.random() * listaDeDados.length
    );

    setFaceAtual(listaDeDados[indice]);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        DiceApp
      </Text>

      <Text style={styles.frase}>
        {faceAtual.frase}
      </Text>

      <Image
        source={{ uri: faceAtual.foto }}
        style={styles.imagem}
        resizeMode="contain"
      />

      <Button
        title="Sortear"
        onPress={sortearDado}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  frase: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 24,
  },

  imagem: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },

});