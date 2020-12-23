import 'styled-components';

export interface Colors {
  onPrimary: string;
  primary: string;
}

export type ColorVariants = 'primary' | 'onPrimary';

export interface DefaultTheme {
  colors: Colors;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
}
