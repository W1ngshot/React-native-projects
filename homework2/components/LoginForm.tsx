import { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export function LoginForm() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string | null>(null);

  const handleLogin = () => {
    if (name.trim() === '' || password.trim() === '') {
      setError('Нужно заполнить оба поля.');
      setGreeting(null);
    } else {
      setError(null);
      setGreeting(`Привет, ${name}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {greeting ? greeting : 'Заполните форму'}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Логин"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <Button title="Войти" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginVertical: 16,
    fontSize: 18,
  },
  input: {
    width: '100%',
    padding: 8,
    marginVertical: 8,
    backgroundColor: '#f5f5f5',
  },
  error: {
    color: 'red',
    marginVertical: 8,
  },
});