import { StyleSheet, Text, View } from 'react-native';
import { PostList } from './components/PostList';

export default function App() {
  return (
    <View style={styles.container}>
      <PostList />
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