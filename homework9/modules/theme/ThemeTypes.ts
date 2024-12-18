export enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
  CONTRAST = "highContrast"
}

export type ThemeType = ThemeTypes.LIGHT | ThemeTypes.DARK | ThemeTypes.CONTRAST;

export interface IColorsValues {
  light: string;
  dark: string;
  highContrast: string;
}

export interface IColors {
  overlay: string;
  backgroundPrimary: string;
  accentDefault: string;
  textPrimary: string;
  textSecondary: string;
}

export enum ColorsKeys {
  overlay = 'overlay',
  backgroundPrimary = 'backgroundPrimary',
  accentDefault = 'accentDefault',
  textPrimary = 'textPrimary',
  textSecondary = 'textSecondary',
}

export interface IThemeContext {
  theme: ThemeType;
  selectTheme: ThemeTypes;
  changeTheme: (value: ThemeTypes) => void;
}