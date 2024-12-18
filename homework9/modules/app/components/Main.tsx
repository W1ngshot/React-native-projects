import { View, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { useTheme } from "../../theme/hooks/useTheme";
import { IColors } from "../../theme/ThemeTypes";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = observer(({ children }) => {
  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  return (
    <View style={styles.container}>
      {children}
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
    }
  });

export default Main;