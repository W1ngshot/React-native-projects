import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemeContext } from "../ThemeProvider";
import { ThemeTypes, IColors } from "../ThemeTypes";
import { useTheme } from "../hooks/useTheme";
import { useTranslation } from "react-i18next";

const ThemeSwitcher: React.FC = () => {
  const { Colors } = useTheme();
  const styles = useStyles(Colors);
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation(["theme"]);

  if (!themeContext) {
    return <Text>Error: ThemeContext not found!</Text>;
  }

  const { changeTheme } = themeContext;

  const handleThemeChange = (newTheme: ThemeTypes) => {
    changeTheme(newTheme);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("title")}</Text>
      <View style={styles.options}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleThemeChange(ThemeTypes.LIGHT)}
        >
          <Text style={styles.optionText}>{t("light")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleThemeChange(ThemeTypes.DARK)}
        >
          <Text style={styles.optionText}>{t("dark")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleThemeChange(ThemeTypes.CONTRAST)}
        >
          <Text style={styles.optionText}>{t("contrast")}</Text>
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
      fontSize: 18,
      color: colors.textPrimary,
      marginBottom: 16,
    },
    options: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    option: {
      padding: 12,
      marginHorizontal: 8,
      borderRadius: 8,
      backgroundColor: colors.overlay,
    },
    optionText: {
      fontSize: 16,
      color: colors.textSecondary,
    },
  });

export default ThemeSwitcher;
