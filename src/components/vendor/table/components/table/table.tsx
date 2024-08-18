import { Box } from '@chakra-ui/react';

import Body from './body';
import Header from './header';

export default function Table() {
    return (
        <Box
            w="full"
            display="table"
            border="1px solid #F4F4F4"
            position="relative"
            sx={{
                borderCollapse: 'collapse',
            }}
        >
            <Header />
            <Body />
        </Box>
    );
}
