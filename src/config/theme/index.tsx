import { createLocalStorageManager, extendTheme } from '@chakra-ui/react';

import style from './style';
import tokens from './tokens';
import components from './components';

export const colorManager = createLocalStorageManager('theme');

export const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    ...style,
    ...tokens,
    ...components,
});
