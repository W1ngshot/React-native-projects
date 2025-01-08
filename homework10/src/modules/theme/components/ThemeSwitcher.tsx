import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemeContext } from "../ThemeProvider";
import { ThemeTypes, IColors } from "../ThemeTypes";
import { useTheme } from "../hooks/useTheme";
import CustomIcon from "../../fonts/components/CustomIcon";

const ThemeSwitcher: React.FC = () => {
  const { Colors } = useTheme();
  const styles = useStyles(Colors);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return <Text>Error: ThemeContext not found!</Text>;
  }

  const { changeTheme } = themeContext;

  const handleThemeChange = (newTheme: ThemeTypes) => {
    changeTheme(newTheme);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите тему</Text>
      <View style={styles.options}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleThemeChange(ThemeTypes.LIGHT)}
        >
          <CustomIcon
            name="adjust-brightness"
            color={Colors.textSecondary}
          ></CustomIcon>
          <Text style={styles.optionText}>Светлая</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleThemeChange(ThemeTypes.DARK)}
        >
          <CustomIcon
            name="weather-night"
            color={Colors.textSecondary}
          ></CustomIcon>
          <Text style={styles.optionText}>Тёмная</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleThemeChange(ThemeTypes.CONTRAST)}
        >
          <CustomIcon
            name="adjust-contrast"
            color={Colors.textSecondary}
          ></CustomIcon>
          <Text style={styles.optionText}>Контраст</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const useStyles = (colors: IColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.backgroundPrimary,
      padding: 16,
    },
    title: {
      fontSize: 20,
      color: colors.textPrimary,
      marginBottom: 16,
      fontFamily: "PixelifySans-Regular",
    },
    options: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    option: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 10,
      padding: 12,
      borderRadius: 8,
      backgroundColor: colors.overlay,
    },
    optionText: {
      fontSize: 16,
      color: colors.textSecondary,
      fontFamily: "PixelifySans-Regular",
    },
  });

export default ThemeSwitcher;
