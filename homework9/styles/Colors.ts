import { ColorsKeys, IColorsValues } from "../modules/theme/ThemeTypes";

export const Colors: Record<ColorsKeys, IColorsValues> = {
  overlay: {
    light: '#21212114',
    dark: '#FFFFFF14',
    highContrast: '#000000',
  },
  backgroundPrimary: {
    light: '#F7F7F7',
    dark: '#121212',
    highContrast: '#FFFFFF',
  },
  accentDefault: {
    light: '#1B58F1',
    dark: '#1B58F1',
    highContrast: '#FFD700',
  },
  textPrimary: {
    light: '#141C24',
    dark: '#FFFFFFF0',
    highContrast: '#000000',
  },
  textSecondary: {
    light: '#4e5a6c',
    dark: '#FFFFFF99',
    highContrast: '#FFFFFF',
  },
};