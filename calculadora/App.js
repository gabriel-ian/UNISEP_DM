import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular(op) {
    const n1 = Number(valor1);
    const n2 = Number(valor2);
    if (op == '+') setResultado(String(n1 + n2));
    if (op == '-') setResultado(String(n1 - n2));
    if (op == '*') setResultado(String(n1 * n2));
    if (op == '/') setResultado(String(n1 / n2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Valor 1"
        keyboardType="numeric"
        onChangeText={setValor1}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor 2"
        keyboardType="numeric"
        onChangeText={setValor2}
      />

      <View style={styles.botoes}>
        <Button title="+" color="darkblue" onPress={() => calcular('+')} />
        <Button title="-" color="darkblue" onPress={() => calcular('-')} />
        <Button title="*" color="darkblue" onPress={() => calcular('*')} />
        <Button title="/" color="darkblue" onPress={() => calcular('/')} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Resultado"
        value={resultado}
        editable={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'darkblue',
    marginBottom: 10,
  },
  input: {
    width: 250,
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  botoes: {
    flexDirection: 'row',
    gap: 10,
    margin: 10,
  },
});


//git