import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#f5f5f5',
    100: '#e1e1e1',
    200: '#cfcfcf',
    300: '#b1b1b1',
    400: '#9e9e9e',
    500: '#7e7e7e', // base color
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
        color: 'white',
        _hover: {
          bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.600',
        },
      }),
    },
  },
};

const theme = extendTheme({ colors, fonts, components });

export default theme;
