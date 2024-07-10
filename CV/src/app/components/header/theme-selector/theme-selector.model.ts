export enum Theme {
  dark = 'dark',
  light = 'light',
}

export interface ThemeData {
  tooltip: string;
  icon: string;
}

export const ThemeMapping: Record<Theme, ThemeData> = {
  [Theme.dark]: {
    tooltip: 'switchFromDark',
    icon: 'nightlight_round',
  },
  [Theme.light]: {
    tooltip: 'switchFromLight',
    icon: 'wb_sunny',
  },
};
