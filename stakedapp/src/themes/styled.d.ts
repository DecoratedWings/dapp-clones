import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        themeType: string;

        colors: {
            background: string,
            text: string,
            primary: string,
            secondary: string,
        };

        button: {
            background: string,
            text: string,
          };

        section: {
            background: string;
            text: string;
        };
    }
}