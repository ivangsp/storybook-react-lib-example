// import original module declarations
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      warning: string;
      white: string;
      dark: string;
    };
    fontFamily: {
      body: string;
    };
  }
}
