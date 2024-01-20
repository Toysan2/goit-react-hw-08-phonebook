import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#3182CE',
    secondary: '#2C5282',
    accent: '#ED64A6',
  },
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Verdana, sans-serif',
  },
});

export default theme;
