import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  StyleSheet
} from 'react-native';

export default function CalculadoraJuros() {

  const [valor, setValor] = useState('');
  const [amizade, setAmizade] = useState('colega');
  const [arredondar, setArredondar] = useState(false);
  const [total, setTotal] = useState(0);

  const calcular = () => {

    let taxa = 0;

    if (amizade === 'melhor_amigo') {
      taxa = 0;
    } else if (amizade === 'amigo') {
      taxa = 0.05;
    } else if (amizade === 'colega') {
      taxa = 0.10;
    } else if (amizade === 'desconhecido') {
      taxa = 0.25;
    }

    const valorNumero = parseFloat(valor);

    if (isNaN(valorNumero)) {
      alert('Digite um número válido!');
      return;
    }

    let resultado = valorNumero + (valorNumero * taxa);

    if (arredondar) {
      resultado = Math.ceil(resultado);
    }

    setTotal(resultado);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Calculadora de Juros
      </Text>

      <Text>
        Valor Emprestado:
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ex: 100"
        value={valor}
        onChangeText={setValor}
      />

      <Text style={styles.label}>
        Nível de amizade:
      </Text>

      <View style={styles.botoes}>

        <Button
          title="Melhor Amigo (0%)"
          onPress={() => setAmizade('melhor_amigo')}
        />

        <Button
          title="Amigo (5%)"
          onPress={() => setAmizade('amigo')}
        />

        <Button
          title="Colega (10%)"
          onPress={() => setAmizade('colega')}
        />

        <Button
          title="Desconhecido (25%)"
          onPress={() => setAmizade('desconhecido')}
        />

      </View>

      <View style={styles.switchContainer}>

        <Text>
          Arredondar valor?
        </Text>

        <Switch
          value={arredondar}
          onValueChange={setArredondar}
        />

      </View>

      <Button
        title="Calcular"
        onPress={calcular}
      />

      <Text style={styles.resultado}>
        A pessoa deve te pagar: R$ {total.toFixed(2)}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },

  label: {
    marginBottom: 8,
    fontWeight: '600',
  },

  botoes: {
    gap: 8,
    marginBottom: 15,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },

});