import { View, Text, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { useTheme } from "../../theme/hooks/useTheme";
import { IColors } from "../../theme/ThemeTypes";

const SquareBlock = observer(() => {
  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Это текст и блок</Text>
      <View style={styles.square}></View>
    </View>
  );
});

const useStyles = (colors: IColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.backgroundPrimary,
    },
    text: {
      color: colors.textPrimary,
      fontSize: 16,
      marginBottom: 16,
    },
    square: {
      width: 100,
      height: 100,
      backgroundColor: colors.overlay,
    },
  });

export default SquareBlock;