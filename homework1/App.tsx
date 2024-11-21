import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { VerticalList } from './components/VerticalList';
import { HorizontalList } from './components/HorizontalList';
import { VerticalTextUnderImageList } from './components/VerticalTextUnderImageList';

const data = [
  {
    image: '../assets/1.jpg',
    text: 'Текст к картинке 1'
  },
  {
    image: '../assets/2.jpg',
    text: 'Текст к картинке 2'
  },
  {
    image: '../assets/3.jpg',
    text: 'Текст к картинке 3'
  }
];

export default function App() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>
          Вертикальный список с описанием справа
        </Text>
        <VerticalList items={data} />
      </View>
      <View>
        <Text style={styles.title}>
          Горизонтальный список с прокруткой
        </Text>
        <ScrollView horizontal={true}>
          <HorizontalList items={data} />
        </ScrollView>
      </View>
      <View>
        <Text style={styles.title}>
          Вертикальный список с описанием снизу
        </Text>
        <VerticalTextUnderImageList items={data} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
});