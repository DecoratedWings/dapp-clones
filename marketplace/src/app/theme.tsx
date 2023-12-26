import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: '#f5f5f5',
    100: '#e1e1e1',
    200: '#cfcfcf',
    300: '#b1b1b1',
    400: '#9e9e9e',
    500: '#32de84', 
    600: '#626262',
    700: '#515151',
    800: '#3b3b3b',
    900: '#222222',
  },
};

const fonts = {
  heading: 'Georgia, serif',
  body: 'Arial, sans-serif',
};

const styles = {
  global: (props: { colorMode: string; }) => ({
    body: {
      bg: props.colorMode === "dark" ? "blue.700" : "white",
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
    },
    sizes: {
      xl: {
        h: '56px',
        fontSize: 'lg',
        px: '32px',
      },
    },
    variants: {
      solid: (props: { colorMode: string; }) => ({
        bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.500',
        color: props.colorMode === 'dark' ?'white': 'black',
        _hover: {
          bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.600',
        },
      }),
    },
  },
};

const theme = extendTheme({ config, colors, fonts, components, styles });

export default theme;
