import { StyleSheet, Text, View } from 'react-native';
import { CounterButton } from './components/CounterButton';
import { LoginForm } from './components/LoginForm';
import { BoxInitializer } from './components/BoxInitializer';

export default function App() {
  return (
    <View style={styles.container}>
      <CounterButton />
      <LoginForm />
      <BoxInitializer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});