export enum Theme {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  DARK = 'dark',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  LIGHT = 'light',
}

export interface ThemeOptions {
  theme?: Theme; // two possible values: light, dark
  languageCode?: string; // supporting arabic, engligh for now
}
